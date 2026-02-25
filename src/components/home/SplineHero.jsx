import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * SplineHero Component
 * Renders the initial viewport experience featuring a vibrant 3D Spline background
 * and high-contrast typography that reacts to the initial scroll.
 */
export const SplineHero = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Fade/Scale Hero text out cleanly on scroll
      gsap.to(containerRef.current, {
        scale: 1.1,
        opacity: 0,
        y: '10vh',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=80%',
          scrub: 1,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center will-change-transform bg-transparent">
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-between py-10">
        <div className="text-white/40 tracking-[0.4em] text-xs font-medium uppercase mt-20">
          Vibrant 3D Experience
        </div>
        
        <h1 className="text-[14vw] font-display text-transparent bg-clip-text bg-gradient-to-br from-volt via-[#ff00ff] to-[#00ffff] leading-none tracking-tighter mix-blend-plus-lighter opacity-40 filter blur-[1px]">
          N<span className="text-white">I</span>KE
        </h1>
        
        <div className="flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-volt drop-shadow-[0_0_10px_rgba(217,254,0,0.8)]">
            Scroll to Morph
          </span>
          <ChevronDown className="w-5 h-5 text-volt" />
        </div>
      </div>
    </div>
  );
};
