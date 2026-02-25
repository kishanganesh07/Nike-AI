import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

export const FoamCushioning = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <div ref={ref} className="min-h-screen relative flex items-center bg-obsidian py-32 overflow-hidden">
            <div className="container mx-auto px-8 lg:pr-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20">
                
                <div className="lg:col-span-7 relative h-[70vh] rounded-[40px] overflow-hidden border-2 border-volt/20 group">
                    <img src={ASSETS.IMAGES.TECH_FOAM} alt="Foam" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-volt mix-blend-overlay opacity-20" />
                </div>
                
                <motion.div style={{ y }} className="lg:col-span-5 flex flex-col justify-center">
                    <h2 className="text-6xl md:text-7xl font-display text-white mb-6 leading-none">React Foam Technology</h2>
                    <p className="text-white/50 text-xl leading-relaxed mb-8">
                        We synthesized a completely new polymer molecule. It's wildly soft, yet snaps back into shape instantly. The result? A ride that absorbs brutal impacts while returning maximum energy.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-volt/10 text-volt flex items-center justify-center font-bold font-display text-xl">1</div>
                            <span className="text-white text-lg font-medium">11% softer than previous iterations</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-volt/10 text-volt flex items-center justify-center font-bold font-display text-xl">2</div>
                            <span className="text-white text-lg font-medium">13% more energy return</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-volt/10 text-volt flex items-center justify-center font-bold font-display text-xl">3</div>
                            <span className="text-white text-lg font-medium">Maintains integrity under freezing temperatures</span>
                        </li>
                    </ul>
                </motion.div>
                
            </div>
        </div>
    );
};
