import { motion } from "framer-motion";
import { useState } from "react";

export const BackgroundParticles = () => {
  const [particles] = useState(() =>
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 20,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      dx: (Math.random() - 0.5) * 20,
      dy: (Math.random() - 0.5) * 20,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            x: `${p.x}%`, 
            y: `${p.y}%`, 
            scale: 0.5, 
            opacity: 0.1 
          }}
          animate={{
            x: [`${p.x}%`, `${p.x + p.dx}%`, `${p.x}%`],
            y: [`${p.y}%`, `${p.y + p.dy}%`, `${p.y}%`],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
          className="absolute bg-volt/5 rounded-full blur-[80px]"
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
};
