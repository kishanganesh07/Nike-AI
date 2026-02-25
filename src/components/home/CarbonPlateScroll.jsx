import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

export const CarbonPlateScroll = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    // Zoom way into the carbon fiber texture
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

    return (
        <div ref={ref} className="h-[150vh] relative bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <motion.img 
                    style={{ scale }}
                    src={ASSETS.IMAGES.TECH_CARBON} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                    alt="Carbon Fiber"
                />
                <div className="absolute inset-0 bg-black/50" />
                
                <motion.div style={{ opacity }} className="relative z-10 text-center px-8 lg:px-24 max-w-4xl mx-auto">
                    <div className="text-volt font-bold uppercase tracking-[1em] text-xs mb-8">The Core</div>
                    <h2 className="text-7xl md:text-9xl font-display text-white uppercase tracking-tighter mb-6 text-glow-white">Carbon Base</h2>
                    <p className="text-2xl text-white/70 font-light leading-relaxed">
                        A full-length, aerospace-grade carbon fiber flyplate sits at the heart of the midsole. It acts as a rigid lever, preventing energy loss at toe-off and catapulting you forward with unforgiving efficiency.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
