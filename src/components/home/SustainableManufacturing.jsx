import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

export const SustainableManufacturing = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    // Shrink the mask to reveal the eco background
    const clipPath = useTransform(scrollYProgress, [0.3, 0.7], ["circle(20% at 50% 50%)", "circle(100% at 50% 50%)"]);

    return (
        <div ref={ref} className="h-[200vh] relative bg-obsidian">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                
                {/* Background underneath the mask */}
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                   <h2 className="text-white/10 font-display text-[20vw] leading-none text-center">ZERO<br/>CARBON</h2>
                </div>

                {/* The Masking Reveal Element */}
                <motion.div style={{ clipPath }} className="absolute inset-0 z-10">
                    <img src={ASSETS.IMAGES.TECH_ECO} alt="Nature" className="w-full h-full object-cover brightness-50" />
                    <div className="absolute inset-0 bg-green-900/30 mix-blend-multiply" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <span className="text-volt font-bold uppercase tracking-[0.5em] text-sm mb-6 drop-shadow-lg">Mission Zero</span>
                        <h2 className="text-6xl md:text-9xl font-display text-white mb-8 drop-shadow-2xl">Earth First</h2>
                        <p className="text-xl md:text-3xl text-white/90 font-light max-w-3xl drop-shadow-lg p-8 glass-card rounded-3xl">
                            We don't sacrifice the planet for performance. Our uppers are spun from 100% recycled ocean plastics. The foam is generated using biological, carbon-sequestering processes. The future of speed is fully circular.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
