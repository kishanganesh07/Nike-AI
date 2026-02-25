import { useRef, useState, useCallback } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export const ThreeDCard = ({ children, className = '', intensity = 15 }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(0, { stiffness: 200, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 30 });
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  const glowX = useTransform(rotateY, [-intensity, intensity], ['0%', '100%']);
  const glowY = useTransform(rotateX, [intensity, -intensity], ['0%', '100%']);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateX.set((y - 0.5) * -intensity);
    rotateY.set((x - 0.5) * intensity);
  }, [intensity, rotateX, rotateY]);

  const handleMouseEnter = () => {
    setHovered(true);
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      {/* Dynamic light gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(217,254,0,0.15), transparent 60%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      {children}
    </motion.div>
  );
};
