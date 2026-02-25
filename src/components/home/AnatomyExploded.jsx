import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';
import { SplitReveal } from '../SplitReveal';

export const AnatomyExploded = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);

    return (
        <div ref={ref} className="min-h-screen relative flex items-center justify-center overflow-hidden bg-obsidian py-24">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url(${ASSETS.IMAGES.TECH_MESH})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }} />
            
            <div className="container mx-auto px-8 lg:px-24 lg:pr-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div style={{ y: y1 }} className="flex flex-col gap-6">
                    <span className="text-volt font-bold uppercase tracking-[0.4em] text-sm">System Breakdown</span>
                    <SplitReveal text="Engineered Anatomy" className="text-6xl md:text-8xl font-display text-white leading-none" />
                    <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mt-4">
                        We don't just build shoes; we engineer kinetic systems. Every layer, from the hyper-tactile outsole to the breathable mesh upper, is mathematically calculated to reduce weight and multiply force.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-4xl text-volt font-display mb-2">3 layers</div>
                            <div className="text-white/40 uppercase tracking-widest text-xs font-bold">Of pure propulsion</div>
                        </div>
                        <div>
                            <div className="text-4xl text-volt font-display mb-2">128g</div>
                            <div className="text-white/40 uppercase tracking-widest text-xs font-bold">Total systemic weight</div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div style={{ scale }} className="relative h-[60vh] w-full rounded-[40px] overflow-hidden border border-white/10 glass-card">
                    <img src={ASSETS.IMAGES.ARCHIVE_SHOES[1]} alt="Anatomy" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                </motion.div>
            </div>
        </div>
    );
};
