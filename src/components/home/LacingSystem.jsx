import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

export const LacingSystem = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    // Animate a line drawing down as you scroll
    const pathLength = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

    return (
        <div ref={ref} className="bg-obsidian w-full min-h-screen relative py-32 overflow-hidden flex items-center">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-volt/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-8 lg:px-24 lg:pr-32 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                
                {/* Visual Side */}
                <div className="relative h-[600px] flex items-center justify-center lg:pr-10">
                    <img src={ASSETS.IMAGES.TECH_LACES} alt="Lacing System" className="w-full h-full object-cover rounded-[50px] brightness-75 drop-shadow-[0_20px_50px_rgba(217,254,0,0.15)]" />
                    
                    {/* SVG overlay to look like tech specs drawing over the shoe */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path 
                            d="M20,20 Q50,50 80,20 T80,80 Q50,50 20,80 Z" 
                            fill="transparent" 
                            stroke="var(--color-volt)" 
                            strokeWidth="0.5"
                            style={{ pathLength }}
                            className="drop-shadow-[0_0_10px_rgba(217,254,0,0.8)]"
                        />
                    </svg>

                    <div className="absolute -right-8 top-20 glass-card p-6 rounded-2xl border border-volt/30 w-64 backdrop-blur-xl">
                        <div className="text-volt font-bold text-xs uppercase tracking-widest mb-2">Metrics Update</div>
                        <div className="text-white font-display text-4xl">14.2 lbs</div>
                        <div className="text-white/50 text-xs">Tensile lockdown strength per eyelet</div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="flex flex-col justify-center lg:pr-16">
                    <h4 className="text-volt uppercase tracking-[0.5em] text-sm font-bold mb-6">Flywire Architecture</h4>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-[0.9]">Dynamic Lockdown</h2>
                    <p className="text-white/60 text-xl leading-relaxed mb-10 w-4/5">
                        Traditional laces just tie down the top of your foot. Our integrated tension-cable system connects directly to the midsole beneath your foot. When you pull the laces, the entire shoe shrinks to wrap around your arch, creating a bespoke, 360-degree lockdown.
                    </p>
                    
                    <ul className="space-y-4">
                       <li className="text-white flex items-center before:content-[''] before:w-2 before:h-2 before:bg-volt before:rounded-full before:mr-4">Eliminates heel-slip completely</li>
                       <li className="text-white flex items-center before:content-[''] before:w-2 before:h-2 before:bg-volt before:rounded-full before:mr-4">Kevlar core cables</li>
                       <li className="text-white flex items-center before:content-[''] before:w-2 before:h-2 before:bg-volt before:rounded-full before:mr-4">Adaptive widening for foot swelling</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
