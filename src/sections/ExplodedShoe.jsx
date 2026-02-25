import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoePlaceholder } from "../components/ShoePlaceholder";

export const ExplodedShoe = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const soleY = useTransform(scrollYProgress, [0.3, 0.6], [0, 150]);
  const airUnitY = useTransform(scrollYProgress, [0.3, 0.6], [0, 50]);
  const swooshY = useTransform(scrollYProgress, [0.3, 0.6], [0, -50]);
  const outlineY = useTransform(scrollYProgress, [0.3, 0.6], [0, -100]);
  
  const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.7, 0.8], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.2]);

  return (
    <section ref={sectionRef} className="relative h-[200vh] bg-black overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <motion.div style={{ opacity }} className="absolute top-20 text-center">
          <h2 className="text-4xl md:text-6xl text-nike-volt">ENGINEERED INTEGRITY</h2>
          <p className="text-zinc-500 mt-4">Every component works in perfect harmony.</p>
        </motion.div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative w-full max-w-4xl"
        >
          <ShoePlaceholder 
            className="w-full"
            parts={{
              sole: { y: soleY },
              airUnit: { y: airUnitY },
              swoosh: { y: swooshY },
              outline: { y: outlineY }
            }}
          />
          
          {/* Labels for parts */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.5, 0.6], [0, 1]), y: soleY }}
            className="absolute bottom-20 right-20 text-right"
          >
            <span className="text-nike-volt font-bold block">REACTIVE SOLE</span>
            <span className="text-zinc-600 text-sm">Dual-density foam</span>
          </motion.div>

          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.5, 0.6], [0, 1]), y: outlineY }}
            className="absolute top-20 left-20"
          >
            <span className="text-nike-volt font-bold block">FLYKNIT SHIELD</span>
            <span className="text-zinc-600 text-sm">Weather-resistant yarn</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
