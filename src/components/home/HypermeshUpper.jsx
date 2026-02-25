import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

export const HypermeshUpper = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    // Float the images opposite to each other
    const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div ref={ref} className="bg-white text-obsidian w-full min-h-[120vh] relative py-32 overflow-hidden flex flex-col justify-center">
            
            <div className="container mx-auto px-8 lg:px-32 relative z-10 text-center max-w-5xl mb-32">
                <span className="text-obsidian/40 uppercase tracking-[0.4em] font-bold text-sm block mb-6">Material Science</span>
                <h2 className="text-6xl md:text-8xl font-display font-black mb-10 leading-none">Vapor-weave Hypermesh</h2>
                <p className="text-2xl text-obsidian/70 font-light mx-auto max-w-2xl leading-relaxed">
                    Engineered to be practically invisible. The single-layer mesh provides critical support while allowing maximum airflow, shedding heat exactly where thermal imaging shows your foot peaks in temperature.
                </p>
            </div>

            <div className="container mx-auto px-8 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-12 h-[600px]">
                <motion.div style={{ y: y1 }} className="rounded-3xl overflow-hidden h-full shadow-2xl relative group">
                     <img src={ASSETS.IMAGES.TECH_MESH} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Mesh" />
                     <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider">01. Breathable</div>
                </motion.div>
                
                <div className="rounded-3xl overflow-hidden h-full mt-12 md:mt-24 shadow-2xl relative group">
                     <img src={ASSETS.IMAGES.ARCHIVE_SHOES[3]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Shoe Upper" />
                     <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider">02. Translucent</div>
                </div>

                <motion.div style={{ y: y2 }} className="rounded-3xl overflow-hidden h-full shadow-2xl relative group">
                     <img src={ASSETS.IMAGES.ARCHIVE_SHOES[4]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Shoe Angle" />
                     <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider">03. Hydrophobic</div>
                </motion.div>
            </div>

        </div>
    );
};
