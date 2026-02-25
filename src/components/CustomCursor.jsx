import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CURSOR_STATES = {
  default: { size: 12, label: '' },
  hover: { size: 40, label: '' },
  view: { size: 80, label: 'VIEW' },
  drag: { size: 60, label: 'DRAG' },
};

export const CustomCursor = () => {
  const [cursorState, setCursorState] = useState('default');

  const cursorX = useSpring(0, { stiffness: 500, damping: 50 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 50 });
  const trailX = useSpring(0, { stiffness: 150, damping: 30 });
  const trailY = useSpring(0, { stiffness: 150, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const el = e.target;
      if (el.closest('.cursor-view')) setCursorState('view');
      else if (el.closest('.cursor-drag')) setCursorState('drag');
      else if (el.closest('button, a, .magnetic-target')) setCursorState('hover');
      else setCursorState('default');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  const state = CURSOR_STATES[cursorState];

  return (
    <>
      {/* Trail */}
      <motion.div
        style={{ translateX: trailX, translateY: trailY, left: -4, top: -4 }}
        className="fixed w-2 h-2 rounded-full bg-volt/30 pointer-events-none z-[998]"
      />
      {/* Main cursor */}
      <motion.div
        style={{ translateX: cursorX, translateY: cursorY }}
        animate={{
          width: state.size,
          height: state.size,
          left: -(state.size / 2),
          top: -(state.size / 2),
          backgroundColor: cursorState === 'hover' ? 'rgba(217,254,0,0.15)' : 'transparent',
          borderColor: cursorState === 'default' ? 'rgba(255,255,255,0.6)' : '#d9fe00',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        className="fixed rounded-full pointer-events-none z-[999] border flex items-center justify-center mix-blend-difference"
      >
        {state.label && (
          <span className="text-[8px] font-bold tracking-widest text-volt">
            {state.label}
          </span>
        )}
      </motion.div>
    </>
  );
};
