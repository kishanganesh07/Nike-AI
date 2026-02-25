import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitReveal } from '../SplitReveal';
import { ASSETS } from '../../constants/assets';

/**
 * StickySwap Component
 * Creates an Apple-style sticky layout where the left image pins in place
 * while right-side content scrolls past it.
 */
export const StickySwap = () => {
    const containerRef = useRef(null);
    const leftTextRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: leftTextRef.current,
                scrub: true,
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const sections = [
        { title: "Aerodynamic Shell", desc: "Wind-tunnel tested to shave milliseconds.", color: "text-volt" },
        { title: "Carbon Chassis", desc: "Rigid yet explosive energy return.", color: "text-white" },
        { title: "React Core", desc: "Infinite comfort over unyielding terrain.", color: "text-gray-400" }
    ];

    return (
        <section ref={containerRef} className="relative bg-surface text-white">
            <div className="flex flex-col md:flex-row">
                {/* Left Pinned Element - Narrower column */}
                <div className="w-full md:w-[40%] h-screen p-8 lg:p-16 flex flex-col justify-center border-r border-white/5 z-10 bg-surface">
                    <div ref={leftTextRef} className="w-full h-[65vh] relative rounded-[40px] overflow-hidden shadow-2xl glass-card border flex items-end">
                        <img 
                            src={ASSETS.IMAGES.DECONSTRUCT_PINNED} 
                            alt="Pinned Visual" 
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-screen scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                </div>

                {/* Right Scrolling Content - Wider column with massive left padding to center it between the image and the scroll spy */}
                <div className="w-full md:w-[60%] py-[50vh] px-8 lg:pl-32 xl:pl-40 lg:pr-40 xl:pr-56 flex flex-col gap-[80vh]">
                    {sections.map((sec, i) => (
                        <div key={i} className="min-h-[50vh] flex flex-col justify-center">
                           <h2 className={`font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-none ${sec.color} mb-6 tracking-tight drop-shadow-md uppercase`}>{sec.title}</h2>
                           <p className="text-xl md:text-2xl text-white/50 max-w-lg leading-relaxed font-medium">{sec.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
