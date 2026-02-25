import { useRef, useEffect, memo } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';

export const SplitReveal = memo(({ text, className = '', delay = 0, once = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} aria-label={text}>
      <div className="flex flex-wrap gap-x-[0.25em]">
        {words.map((word, i) => (
          <div key={i} className="overflow-hidden">
            <motion.span
              className={`inline-block ${className.includes('neon') ? 'text-neon-gradient' : ''}`}
              initial={{ y: '110%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: delay + i * 0.07,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {word}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
});

export const SplitRevealChars = memo(({ text, className = '', delay = 0, once = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px' });
  const chars = text.split('');

  return (
    <div ref={ref} className={`overflow-hidden flex flex-wrap ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotateX: -90, opacity: 0 }}
            animate={isInView ? { y: 0, rotateX: 0, opacity: 1 } : { y: '110%', rotateX: -90, opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.04,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </div>
      ))}
    </div>
  );
});
