import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ShoePlaceholder } from '../components/ShoePlaceholder';
import { TextPressure } from '../components/TextPressure';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const staggeredVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  return (
    <section ref={containerRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden bg-nike-obsidian">
      {/* Background Big Text */}
      <motion.div 
        style={{ y: y1, opacity: useTransform(scrollYProgress, [0, 0.5], [0.1, 0]) }}
        className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
      >
        <span className="text-[35vw] font-black italic text-white/5 whitespace-nowrap leading-none tracking-tighter">
          INNOVATION
        </span>
      </motion.div>

      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-start text-left">
          <motion.div 
            custom={0}
            variants={staggeredVariant}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-nike-volt" />
            <span className="text-nike-volt font-bold uppercase tracking-[0.4em] text-xs">Summer 2026 Collection</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={staggeredVariant}
            initial="hidden"
            animate="visible"
            className="mb-8 w-full -ml-4 lg:-ml-8"
          >
            <TextPressure 
              text="REDEFINE" 
              textColor="#ffffff"
              minFontSize={60}
            />
            <div className="flex items-center gap-4 mt-2 lg:mt-0">
              <span className="text-8xl md:text-[10rem] font-black italic tracking-tighter text-nike-volt leading-none">
                AIR
              </span>
              <div className="h-px flex-1 bg-white/10 hidden md:block" />
            </div>
          </motion.div>

          <motion.p 
            custom={2}
            variants={staggeredVariant}
            initial="hidden"
            animate="visible"
            className="text-zinc-400 text-lg md:text-xl mb-10 max-w-md leading-relaxed"
          >
            Experience a new dimension of comfort. The Air Max 2026 features our first ever fully modular cushioning system.
          </motion.p>

          <motion.button 
            custom={3}
            variants={staggeredVariant}
            initial="hidden"
            animate="visible"
            className="group relative px-12 py-5 bg-nike-volt text-black font-black uppercase tracking-widest rounded-full overflow-hidden magnetic-target hover:bg-white transition-colors"
          >
            <span className="relative z-10 flex items-center gap-3">
              Pre-Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </motion.button>
        </div>

        {/* Right Product Shadow/Parallax */}
        <motion.div 
          style={{ y: y2, scale, opacity }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden xl:block xl:col-span-7 relative"
        >
          <div className="absolute inset-0 bg-nike-volt/10 blur-[150px] rounded-full -z-10 animate-pulse" />
          <ShoePlaceholder className="w-full drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)] rotate-[-15deg]" />
          
          {/* Floating Specs */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/4 -right-10 glass-card p-6 rotate-6"
          >
            <span className="text-nike-volt text-xs font-bold block mb-1">WEIGHT</span>
            <span className="text-2xl font-black italic">240G</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-0 glass-card p-6 -rotate-3"
          >
            <span className="text-nike-volt text-xs font-bold block mb-1">RECOIL</span>
            <span className="text-2xl font-black italic">+15%</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 right-12 flex items-center gap-4 rotate-90 origin-right"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">Scroll to Explore</span>
        <div className="w-20 h-px bg-nike-volt/30" />
      </motion.div>
    </section>
  );
};
