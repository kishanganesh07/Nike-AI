import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

export const ColorwayGallery = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    // Smooth, slow horizontal scroll for the gallery
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    const colorways = [
        { name: "Volt / Obsidian", img: ASSETS.IMAGES.ARCHIVE_SHOES[0] },
        { name: "Cyberpunk Pink", img: ASSETS.IMAGES.ARCHIVE_SHOES[1] },
        { name: "Arctic Ice", img: ASSETS.IMAGES.ARCHIVE_SHOES[2] },
        { name: "Stealth Black", img: ASSETS.IMAGES.ARCHIVE_SHOES[3] },
        { name: "Crimson Forge", img: ASSETS.IMAGES.ARCHIVE_SHOES[4] }
    ];

    return (
        <div ref={ref} className="bg-[#111] w-full min-h-[120vh] relative py-32 overflow-hidden flex flex-col justify-center">
            
            <div className="container mx-auto px-8 relative z-10 mb-20 text-center">
                <h2 className="text-6xl md:text-8xl font-display text-white mb-6 uppercase tracking-tight">The Drops</h2>
                <div className="w-16 h-1 bg-volt mx-auto mb-8"></div>
                <p className="text-white/50 text-xl max-w-2xl mx-auto">
                    Engineered for performance, designed for the streets. Explore the initial launch colorways dropping this season.
                </p>
            </div>

            <motion.div style={{ x }} className="flex gap-12 px-8 w-[200vw] lg:w-[150vw]">
                {colorways.map((cw, idx) => (
                    <div key={idx} className="w-[400px] h-[500px] shrink-0 relative group rounded-3xl overflow-hidden glass-card">
                        <img src={cw.img} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" alt={cw.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-8 left-8">
                            <h3 className="text-3xl font-display text-white">{cw.name}</h3>
                            <div className="text-volt font-bold text-xs uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Edition →</div>
                        </div>
                    </div>
                ))}
            </motion.div>

        </div>
    );
};
