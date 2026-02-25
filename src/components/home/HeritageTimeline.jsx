import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

export const HeritageTimeline = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    // Draw the timeline
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const eras = [
        { year: "2018", title: "Project Alpha", desc: "The first prototype using generative algorithms to shave weight from the midsole." },
        { year: "2021", title: "Carbon Integration", desc: "Introduction of the aerospace carbon fiber plate, shattering marathon records globally." },
        { year: "2024", title: "Hypermesh Era", desc: "Total redesign of the upper, utilizing vapor-weave plastics for zero-retention sweat systems." },
        { year: "2026", title: "The Apex Line", desc: "Culminating in the current model. Unrivaled energy return. The pinnacle of human speed." }
    ];

    return (
        <div ref={ref} className="bg-obsidian w-full relative py-32 overflow-hidden">
            
            <div className="container mx-auto px-8 max-w-5xl relative">
                
                <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-32 text-center uppercase tracking-tight">The Bloodline</h2>

                {/* Vertical Timeline Line */}
                <div className="absolute left-8 lg:left-1/2 top-[200px] bottom-0 w-px bg-white/10 -translate-x-1/2">
                    <motion.div style={{ scaleY, transformOrigin: "top" }} className="w-full h-full bg-volt shadow-[0_0_15px_rgba(217,254,0,0.8)]" />
                </div>

                <div className="flex flex-col gap-48">
                    {eras.map((era, i) => (
                        <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''} relative`}>
                            
                            {/* Dot on line */}
                            <div className="absolute left-8 lg:left-1/2 top-1/2 w-4 h-4 rounded-full bg-obsidian border-[3px] border-volt -translate-x-1/2 -translate-y-1/2 z-10" />

                            <div className="w-full lg:w-1/2" />
                            
                            <div className={`w-full lg:w-1/2 ${i % 2 === 0 ? 'lg:pl-24' : 'lg:pr-24 text-left lg:text-right'} pl-20 lg:pl-0`}>
                                <div className="text-volt font-display text-6xl md:text-7xl mb-6">{era.year}</div>
                                <h3 className="text-white text-4xl font-bold mb-6">{era.title}</h3>
                                <p className="text-white/60 text-xl leading-relaxed">{era.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
