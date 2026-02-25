import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../../constants/assets';

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxGrid Component
 * Lusion-style quad-column layout moving at varying scroll velocities
 * for maximum feeling of digital depth and speed.
 */
export const ParallaxGrid = () => {
  const containerRef = useRef(null);
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Automatic continuous upward and downward floating
      gsap.to(col1Ref.current, {
        yPercent: -15,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
      gsap.to(col2Ref.current, {
        yPercent: 15,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
      gsap.to(col3Ref.current, {
        yPercent: -20,
        duration: 7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
      gsap.to(col4Ref.current, {
        yPercent: 20,
        duration: 9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Double the array to ensure we never run out of scrolling images
  const doubledAssets = [...ASSETS.IMAGES.ARCHIVE_SHOES, ...ASSETS.IMAGES.ARCHIVE_SHOES];

  return (
    <section ref={containerRef} className="py-20 md:py-40 bg-black overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full overflow-hidden">
        <h2 className="text-[12vw] text-white font-display mix-blend-difference drop-shadow-2xl tracking-tighter w-full text-center">SPEED</h2>
      </div>
      
      {/* Changed to w-full to fill the screen properly on wide monitors, removing max-w limiter */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden h-[120vh]">
        <div className="flex gap-4 md:gap-6 lg:gap-8 h-[250vh] -mt-[60vh] min-w-0">
          
          {/* Column 1 - Moves Up Fast */}
          <div ref={col1Ref} className="flex-1 min-w-0 flex flex-col gap-4 md:gap-6 lg:gap-8 will-change-transform">
            {doubledAssets.slice(0, 8).map((img, i) => (
              <img key={`c1-${i}`} src={img} className="w-full rounded-2xl md:rounded-3xl xl:rounded-[40px] object-cover h-[30vh] md:h-[40vh] xl:h-[50vh]" alt="Shoe Column 1" />
            ))}
          </div>

          {/* Column 2 - Moves Down Slow */}
          <div ref={col2Ref} className="flex-1 min-w-0 flex flex-col gap-4 md:gap-6 lg:gap-8 will-change-transform pt-[20vh] md:pt-[40vh]">
            {doubledAssets.slice(3, 11).map((img, i) => (
              <img key={`c2-${i}`} src={img} className="w-full rounded-2xl md:rounded-3xl xl:rounded-[40px] object-cover h-[35vh] md:h-[45vh] xl:h-[55vh] opacity-80" alt="Shoe Column 2" />
            ))}
          </div>

          {/* Column 3 - Moves Up Very Fast */}
          <div ref={col3Ref} className="flex-1 min-w-0 flex flex-col gap-4 md:gap-6 lg:gap-8 will-change-transform pt-[10vh] md:pt-[20vh]">
            {doubledAssets.slice(6, 14).map((img, i) => (
              <img key={`c3-${i}`} src={img} className="w-full rounded-2xl md:rounded-3xl xl:rounded-[40px] object-cover h-[30vh] md:h-[40vh] xl:h-[45vh]" alt="Shoe Column 3" />
            ))}
          </div>

          {/* Column 4 - Moves Down Faster */}
          <div ref={col4Ref} className="flex-1 min-w-0 flex flex-col gap-4 md:gap-6 lg:gap-8 will-change-transform -mt-[10vh] md:-mt-[20vh]">
            {doubledAssets.slice(1, 9).map((img, i) => (
              <img key={`c4-${i}`} src={img} className="w-full rounded-2xl md:rounded-3xl xl:rounded-[40px] object-cover h-[35vh] md:h-[45vh] xl:h-[50vh] opacity-90" alt="Shoe Column 4" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
