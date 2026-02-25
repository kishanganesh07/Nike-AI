import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

export const TractionPattern = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    // Parallax the massive text
    const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
    const x2 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

    return (
        <div ref={ref} className="min-h-screen relative bg-black py-40 overflow-hidden flex flex-col justify-center">
            
            <motion.div style={{ x: x1 }} className="whitespace-nowrap font-display text-[15vw] text-white/5 uppercase leading-none select-none tracking-tighter">
                Algorithmic Grip Pattern
            </motion.div>
            
            <div className="container mx-auto px-8 lg:px-24 lg:pr-32 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center my-12 shadow-2xl">
                <div>
                   <h2 className="text-5xl md:text-7xl font-display text-white mb-6">Traction Map</h2>
                   <div className="w-20 h-2 bg-volt mb-8"></div>
                   <p className="text-white/60 text-xl leading-relaxed">
                       Using data from thousands of runners, we mapped the exact high-abrasion zones on the foot. The generative outsole pattern places thicker rubber precisely where you strike, and shaves it away where you don't. Maximum traction, zero dead weight.
                   </p>
                </div>
                <div className="glass-card p-4 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                    <img src={ASSETS.IMAGES.TECH_TRACTION} className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Generative Traction" />
                </div>
            </div>

            <motion.div style={{ x: x2 }} className="whitespace-nowrap font-display text-[15vw] text-white/5 uppercase leading-none select-none tracking-tighter">
                Generative Outsole Geometry
            </motion.div>

        </div>
    );
};
