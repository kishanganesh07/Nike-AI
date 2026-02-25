import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../../constants/assets';

export const RunnerTelemetry = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <div ref={ref} className="bg-[#050505] min-h-screen relative py-40 overflow-hidden border-t border-b border-volt/20">
            <div className="container mx-auto px-8 lg:px-32 relative z-20 mb-24">
                <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-8">Telemetry & Data</h2>
                <div className="w-24 h-1 bg-volt mb-10"></div>
                <p className="text-white/60 text-2xl max-w-4xl leading-relaxed font-light">
                    Every design choice was forced through millions of data points gathered from elite marathoners. We track gait cycles, pronation angles, and forceplate impact to objectively prove this is the fastest shoe legally allowed in competition.
                </p>
            </div>

            {/* Horizontal scrolling data visualization */}
            <div className="relative w-full h-[600px] overflow-hidden flex items-center">
                <motion.div style={{ x }} className="flex gap-16 absolute left-8 lg:left-32">
                    {/* Mock Data Cards */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-[600px] h-[400px] shrink-0 border border-white/10 rounded-3xl p-8 bg-white/5 relative overflow-hidden group">
                           <img src={ASSETS.IMAGES.TECH_DATA} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" alt="Telemetry" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                           
                           <div className="relative z-10 h-full flex flex-col justify-end">
                              <div className="text-volt font-mono text-sm mb-2">{`DATA_NODE_${i}00X`}</div>
                              <div className="text-white text-3xl font-display mb-2">{i===1 ? 'Gait Analysis' : i===2 ? 'Impact Force' : i===3 ? 'Energy Return' : 'Stride Length'}</div>
                              <div className="text-white/50">{`Verified through 10,000+ hours of wind-tunnel and track testing protocols. Optimization score: ${95 + i}%`}</div>
                           </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
