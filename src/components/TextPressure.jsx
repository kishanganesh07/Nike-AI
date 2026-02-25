import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TextPressure = ({ 
  text = "NIKE", 
  flex = true, 
  alpha = false, 
  stroke = false, 
  width = true, 
  weight = true, 
  italic = true, 
  textColor = "#ffffff", 
  strokeColor = "#ff0000", 
  minFontSize = 24 
}) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex items-center justify-center overflow-visible py-4">
      <motion.h1
        animate={{
          fontVariationSettings: `"wght" ${400 + mousePos.x * 500}, "wdth" ${100 + mousePos.y * 100}`,
          color: textColor,
        }}
        style={{
          fontSize: "clamp(2rem, 12vw, 12rem)",
          lineHeight: 0.8,
          WebkitTextStroke: stroke ? `2px ${strokeColor}` : "none",
        }}
        className="font-black tracking-tighter uppercase select-none cursor-serif whitespace-nowrap px-8"
      >
        {text}
      </motion.h1>
    </div>
  );
};
