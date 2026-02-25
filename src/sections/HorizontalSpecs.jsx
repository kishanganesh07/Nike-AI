import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HorizontalSpecs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-zinc-950">
      <div className="sticky top-0 flex h-screen items-center justify-start overflow-hidden px-10">
        <motion.div style={{ x }} className="flex gap-20 items-center">
          <div className="flex-shrink-0 w-[500px]">
             <h2 className="text-8xl text-zinc-800">THE TECH</h2>
             <p className="text-zinc-600 mt-4 text-xl">Scroll to deconstruct the innovation.</p>
          </div>
          
          <SpecCard 
            num="01" 
            title="DUAL-DENSITY FOAM" 
            desc="Combining two types of foam for a ride that's both stable and smooth." 
          />
          <SpecCard 
            num="02" 
            title="DYNAMIC CABLES" 
            desc="Flywire cables integrate with the laces for a secure, locked-in feel." 
          />
          <SpecCard 
            num="03" 
            title="ENHANCED GRIP" 
            desc="Generative outsole design based on athlete pressure maps." 
          />
          <SpecCard 
            num="04" 
            title="CARBON PLATE" 
            desc="Full-length carbon fiber plate for snappier transitions." 
          />
          
          <div className="flex-shrink-0 w-[500px] flex flex-col items-center">
             <div className="text-[200px] font-black italic text-nike-volt/5 leading-none">2026</div>
             <p className="text-nike-volt text-sm tracking-[0.5em] uppercase mt-4">Legacy in motion</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SpecCard = ({ num, title, desc }) => (
  <div className="flex-shrink-0 w-[400px] h-[500px] glass-card p-12 flex flex-col justify-between group overflow-hidden relative">
    <div className="absolute top-0 right-0 p-8 text-8xl font-black italic text-white/5 group-hover:text-nike-volt/10 transition-colors">
      {num}
    </div>
    <div>
      <div className="w-12 h-1 bg-nike-volt mb-8 group-hover:w-full transition-all duration-700" />
      <h3 className="text-4xl leading-tight mb-4">{title}</h3>
      <p className="text-zinc-500 text-lg leading-relaxed">{desc}</p>
    </div>
    <div className="flex items-center gap-2 text-nike-volt text-sm font-bold uppercase tracking-widest cursor-pointer">
      Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
    </div>
  </div>
);
