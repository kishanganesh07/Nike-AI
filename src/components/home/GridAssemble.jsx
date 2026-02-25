import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitReveal } from '../SplitReveal';
import { ASSETS } from '../../constants/assets';

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_SRC =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f0c29"/>
          <stop offset="1" stop-color="#1a1a2e"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <circle cx="520" cy="260" r="220" fill="rgba(217,254,0,0.12)"/>
      <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="DM Sans, Arial, sans-serif" font-size="28" fill="rgba(255,255,255,0.65)" letter-spacing="6">IMAGE</text>
    </svg>`
  );

/**
 * GridAssemble Component
 * An interactive 3D particle array that assembles into an orthographic grid
 * of sneaker imagery when the user scrolls into view.
 */
export const GridAssemble = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  const handleImgError = (e) => {
    const img = e.currentTarget;
    if (img.dataset.fallbackApplied === '1') return;
    img.dataset.fallbackApplied = '1';
    img.src = FALLBACK_SRC;
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const images = gsap.utils.toArray('.grid-item');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        }
      });

      // Scatter elements randomly in 3D space
      gsap.set(images, {
        z: () => gsap.utils.random(-2000, -500),
        x: () => gsap.utils.random(-800, 800),
        y: () => gsap.utils.random(-800, 800),
        rotationX: () => gsap.utils.random(-45, 45),
        rotationY: () => gsap.utils.random(-45, 45),
        opacity: 0
      });

      // Animate them back to origin
      tl.to(images, {
        z: 0, x: 0, y: 0, rotationX: 0, rotationY: 0, opacity: 1,
        stagger: 0.05, ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-obsidian overflow-hidden relative flex items-center justify-center [perspective:2000px] border-t border-white/5">
      <div className="absolute top-10 left-10 z-20">
         <SplitReveal text="The Archive." className="font-display text-4xl lg:text-5xl neon pointer-events-none drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]" />
      </div>
      <div ref={gridRef} className="w-[100vw] h-[100vh] grid auto-rows-fr grid-cols-3 md:grid-cols-5 gap-2 lg:gap-4 p-4 [transform-style:preserve-3d]">
        {[...ASSETS.IMAGES.ARCHIVE_SHOES, ...ASSETS.IMAGES.ARCHIVE_SHOES].slice(0, 15).map((src, i) => (
          <div key={i} className="grid-item w-full h-full relative rounded-xl overflow-hidden will-change-transform">
            <img
              src={src}
              className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              alt="Archive Shoe"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={handleImgError}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
