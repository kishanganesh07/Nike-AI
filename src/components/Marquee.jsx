import { memo } from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  'AIR MAX', '·', 'JUST DO IT', '·', 'INNOVATION', '·',
  'FUTURE FORWARD', '·', 'ULTRA LIGHT', '·', 'VOLT ENERGY', '·',
  'SUMMER 2026', '·', 'PURE SPEED', '·', 'BORN HERE', '·',
];

export const Marquee = memo(({ reverse = false, speed = 25 }) => {
  const items = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden py-4 border-y border-white/10">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: 'linear',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`font-display text-lg tracking-widest uppercase ${
              item === '·' ? 'text-volt' : 'text-white/40'
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
});
