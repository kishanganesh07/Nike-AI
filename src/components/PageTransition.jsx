import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const WipeTransition = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className="fixed inset-0 bg-volt z-[9999] pointer-events-none"
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0, transformOrigin: 'bottom' }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />
    )}
  </AnimatePresence>
);
