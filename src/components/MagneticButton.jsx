import { useRef, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

export const MagneticButton = ({ children, className = '', strength = 0.4, onClick }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 25 });
  const y = useSpring(0, { stiffness: 300, damping: 25 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  }, [strength, x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setHovered(false);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`magnetic-target relative overflow-hidden ${className}`}
      whileTap={{ scale: 0.96 }}
    >
      <motion.span
        className="absolute inset-0 bg-volt rounded-full scale-0 opacity-0"
        animate={hovered ? { scale: 1.5, opacity: 0.15 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      {children}
    </motion.button>
  );
};
