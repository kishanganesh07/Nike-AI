import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';

export const GlitchText = ({ text, className = '', trigger = true }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const stepRef = useRef(0);

  useEffect(() => {
    if (!trigger) return;
    
    stepRef.current = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      stepRef.current += 1;
      const progress = stepRef.current / (text.length * 2);

      setDisplayText(
        text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < stepRef.current - text.length) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('')
      );

      if (progress >= 1) {
        setDisplayText(text);
        clearInterval(intervalRef.current);
      }
    }, 40);

    return () => clearInterval(intervalRef.current);
  }, [text, trigger]);

  return (
    <span className={`font-display ${className}`}>
      {displayText}
    </span>
  );
};
