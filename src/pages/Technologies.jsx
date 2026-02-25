import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SplitReveal } from '../components/SplitReveal';

const TechCard = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: index * 0.1 
      }}
      className="glass-card p-12 border border-white/10 group hover:border-volt/50 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-volt/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-volt font-display text-2xl mb-4">{String(index + 1).padStart(2, '0')}</div>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-white/60 leading-relaxed text-lg">{description}</p>
    </motion.div>
  );
};

export const Technologies = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  
  const techs = [
    { title: "Quantum Foam", description: "Engineered at the molecular level for unparalleled responsiveness and weight reduction. Adapts instantly to pressure points." },
    { title: "AeroWeave Shell", description: "Bionic fiber construction providing waterproof durability while remaining highly breathable. Tensile strength matching steel." },
    { title: "Kinetic Return", description: "Energy recovery lattice that redirects ground forces forward, increasing overall efficiency by up to 18%." },
    { title: "Neural Grip", description: "Tread pattern inspired by neural networks, providing omnidirectional traction that predicts biomechanical slips." },
  ];

  return (
    <div id="technology" className="min-h-screen bg-obsidian pt-[18vh] pb-24 md:pb-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="mb-24 md:mb-32 flex flex-col items-center justify-center text-center">
          <SplitReveal text="TECHNOLOGIES" className="font-display text-[5rem] md:text-[8rem] text-volt leading-none" />
          <p className="mt-6 text-white/50 text-xl max-w-2xl">
            We don't just use materials. We invent them. Explore the sub-atomic engineering that defines our latest collection.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 relative mt-16 md:mt-24">
          {/* Parallax Columns */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-12">
            {techs.slice(0, 2).map((tech, i) => (
              <TechCard key={i} title={tech.title} description={tech.description} index={i} />
            ))}
          </motion.div>
          <motion.div style={{ y: y2 }} className="flex flex-col gap-12 mt-20 md:mt-40">
            {techs.slice(2, 4).map((tech, i) => (
              <TechCard key={i+2} title={tech.title} description={tech.description} index={i+2} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
