import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export const TypewriterText = ({ text, className = '', delay = 0, speed = 50 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      let i = 0;
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          i++;
          setDisplayed(text.slice(0, i));
          if (i >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, started, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-volt ml-1 animate-pulse align-middle" />
      )}
    </span>
  );
};
