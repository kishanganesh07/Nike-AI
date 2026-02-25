import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoePlaceholder } from '../components/ShoePlaceholder';

export const ProductShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation values for the shoe
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-25, 0, 25]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-300, 0, 300]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.1, 0.7]);
  
  // Opacity for the background glows
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-obsidian py-20 overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center w-full">
          
        {/* Ambient Backlighting */}
        <motion.div 
            style={{ opacity: glowOpacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-volt/10 rounded-full blur-[120px] pointer-events-none z-0" 
        />

        {/* Cinematic Background Text running behind the shoe */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 pointer-events-none select-none">
          <motion.h2 
            style={{ 
                opacity: useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0.8, 0]),
                y: useTransform(scrollYProgress, [0, 0.5], [100, -100])
             }}
            className="text-[12vw] sm:text-[14vw] font-display text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none"
          >
            AERODYNAMIC
          </motion.h2>
          <motion.h2 
            style={{ 
                opacity: useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 0.8, 0]),
                scale: useTransform(scrollYProgress, [0.35, 0.65], [0.9, 1.1])
            }}
            className="text-[12vw] sm:text-[14vw] font-display text-transparent bg-clip-text bg-gradient-to-b from-volt/20 to-transparent leading-none my-[-4vw]"
          >
            LIGHTWEIGHT
          </motion.h2>
          <motion.h2 
            style={{ 
                opacity: useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 0.8, 0]),
                y: useTransform(scrollYProgress, [0.5, 1], [-100, 100])
             }}
            className="text-[12vw] sm:text-[14vw] font-display text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none"
          >
            REACTIVE
          </motion.h2>
        </div>

        <motion.div 
          style={{ rotate, x, scale }}
          className="relative w-full max-w-4xl z-20 px-8"
        >
          <ShoePlaceholder className="w-full drop-shadow-[0_60px_60px_rgba(0,0,0,0.8)] filter transition-all duration-700 hover:drop-shadow-[0_60px_60px_rgba(217,254,0,0.2)]" />
          
          {/* Scroll-triggered Info Card 1 */}
          <motion.div 
            style={{ 
                opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]),
                y: useTransform(scrollYProgress, [0.35, 0.45], [50, 0])
            }}
            className="absolute top-10 -right-4 lg:-right-20 p-8 glass-card rounded-[32px] max-w-[320px] border border-white/10 shadow-2xl backdrop-blur-xl bg-black/40"
          >
            <div className="w-10 h-10 rounded-full bg-volt/10 flex items-center justify-center mb-6">
                 <span className="text-volt font-display text-xl">01</span>
            </div>
            <h3 className="text-white font-display text-3xl mb-3 tracking-wide">Air Unit 360</h3>
            <p className="text-sm text-white/50 leading-relaxed">Maximum cushioning for ultimate impact protection and all-day comfort. Experience weightless transitions.</p>
          </motion.div>

          {/* Scroll-triggered Info Card 2 */}
          <motion.div 
            style={{ 
                opacity: useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]),
                y: useTransform(scrollYProgress, [0.55, 0.65], [50, 0])
            }}
            className="absolute bottom-10 -left-4 lg:-left-20 p-8 glass-card rounded-[32px] max-w-[320px] border border-white/10 shadow-2xl backdrop-blur-xl bg-black/40"
          >
            <div className="w-10 h-10 rounded-full bg-volt/10 flex items-center justify-center mb-6">
                 <span className="text-volt font-display text-xl">02</span>
            </div>
            <h3 className="text-white font-display text-3xl mb-3 tracking-wide">Flyknit Upper</h3>
            <p className="text-sm text-white/50 leading-relaxed">Precisely engineered for a seamless fit that wraps your foot like a second skin. Breathable and dynamic.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Progress Line Indicator */}
      <div className="absolute left-6 md:left-12 top-1/4 bottom-1/4 w-[2px] bg-white/5 rounded-full overflow-hidden hidden md:block z-30">
        <motion.div 
          style={{ scaleY: scrollYProgress, originY: 0 }}
          className="w-full h-full bg-volt shadow-[0_0_15px_rgba(217,254,0,0.8)]"
        />
      </div>
    </section>
  );
};
