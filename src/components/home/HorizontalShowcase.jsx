import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitReveal } from '../SplitReveal';
import { ASSETS } from '../../constants/assets';

gsap.registerPlugin(ScrollTrigger);

/**
 * HorizontalShowcase Component
 * Traps vertical scroll and translates it into a massive horizontal pan sequence
 * passing through monolithic glass interface panels.
 */
export const HorizontalShowcase = () => {
    const containerRef = useRef(null);
    
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const panels = gsap.utils.toArray('.horizontal-panel');
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: ASSETS.PHYSICS.GSAP_SCRUB,
                    snap: 1 / (panels.length - 1),
                    end: "+=5000" // Requires 5000px of vertical scroll to clear
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen bg-obsidian border-t border-white/5 overflow-hidden flex flex-col justify-center relative">
             <div className="absolute top-10 w-full flex justify-center pointer-events-none z-20">
                <SplitReveal text="DEEP SHOWCASE" className="font-display text-[8vw] lg:text-[10vw] text-white/5" />
            </div>
            
            {/* 
              The internal container is 300vw wide to accommodate 3x 100vw panels.
              GSAP translates this container horizontally as the user scrolls vertically.
            */}
            <div className="flex h-full w-[300vw]">
                {/* Panel 1: Aerodynamics */}
                <div className="horizontal-panel w-screen h-full flex items-center justify-center p-10 lg:p-32 relative">
                     <div className="w-full h-full glass-card overflow-hidden relative cursor-view group">
                         <img src={ASSETS.IMAGES.FEATURE_AERODYNAMICS} className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-100 transition-opacity duration-1000 transform group-hover:scale-105" alt="Showcase Aerodynamics" />
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gradient-to-t from-black/50 to-transparent">
                            <h3 className="font-display text-5xl md:text-7xl lg:text-9xl text-white drop-shadow-2xl">AERODYNAMICS</h3>
                         </div>
                     </div>
                </div>
                
                {/* Panel 2: Interactive */}
                <div className="horizontal-panel w-screen h-full flex items-center justify-center p-10 lg:p-32 relative cursor-default">
                     <div className="w-full h-full glass-card overflow-hidden relative flex bg-black/50">
                          <div className="absolute inset-0 z-0 flex items-center justify-center">
                               <img src={ASSETS.IMAGES.FEATURE_INTERACTIVE} className="w-full h-full object-cover opacity-50" alt="Showcase Topology" />
                          </div>
                          <div className="absolute bottom-10 left-10 pointer-events-none bg-obsidian/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 z-10">
                              <h4 className="font-display text-3xl md:text-4xl text-volt mb-2">INTERACTIVE NODE</h4>
                              <p className="text-white/50 text-xs md:text-sm tracking-widest uppercase">Drag to Inspect Topology</p>
                          </div>
                     </div>
                </div>
                
                 {/* Panel 3: Kinetics */}
                 <div className="horizontal-panel w-screen h-full flex items-center justify-center p-10 lg:p-32 relative">
                     <div className="w-full h-full glass-card overflow-hidden relative cursor-view group">
                         <img src={ASSETS.IMAGES.FEATURE_KINETICS} className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-100 transition-opacity duration-1000 transform group-hover:scale-105" alt="Showcase Kinetics" />
                         <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gradient-to-t from-black/50 to-transparent">
                            <h3 className="font-display text-5xl md:text-7xl lg:text-9xl text-white drop-shadow-2xl">KINETICS</h3>
                         </div>
                     </div>
                </div>
            </div>
        </section>
    );
};
