import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SpotlightCard } from '../components/SpotlightCard';
import { Zap, Shield, Wind, Activity } from 'lucide-react';

const features = [
  {
    title: "Ultra Responsive",
    desc: "Energy-returning foam that pushes you forward.",
    icon: Zap,
    color: "text-nike-volt"
  },
  {
    title: "Light as Air",
    desc: "Flyknit construction reduces weight while improving durability.",
    icon: Wind,
    color: "text-blue-400"
  },
  {
    title: "Maximum Grip",
    desc: "Multi-directional traction pattern for elite control.",
    icon: Shield,
    color: "text-purple-400"
  },
  {
    title: "Dynamic Fit",
    desc: "Internal cage mimics the movement of the human foot.",
    icon: Activity,
    color: "text-orange-400"
  }
];

export const DynamicFeatures = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-32 px-8 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl mb-6">PURE <span className="text-nike-volt">INNOVATION</span></h2>
            <p className="text-zinc-500 text-lg">Every detail engineered for performance. Driven by athlete data, perfected by science.</p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="hidden md:block"
          >
            <div className="text-6xl font-black italic text-zinc-800 tracking-tighter">NIKE AIR 2026</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full">
                <feature.icon className={`w-12 h-12 mb-6 ${feature.color}`} />
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
