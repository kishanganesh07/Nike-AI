import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const MacbookScroll = ({
  src,
  badge,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translateZ = useTransform(scrollYProgress, [0, 0.3], [0, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [15, 0]);
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, isMobile ? 0 : 0]
  );

  return (
    <div
      ref={ref}
      className="min-h-[200vh] flex flex-col items-center py-0 md:py-40 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.4] sm:scale-50"
    >
      <motion.div
        style={{
          translateY,
        }}
        className="transform flex justify-center w-full"
      >
        <motion.div
          style={{
            rotateX,
            scaleX,
            scaleY,
            translateZ,
          }}
          className="w-[1000px] max-w-full flex-shrink-0"
        >
          {badge && <div className="absolute top-0 right-0 z-50 transform translate-x-4 -translate-y-4">{badge}</div>}
          <div className="relative w-full aspect-video overflow-hidden rounded-[40px] border-[12px] border-[#272729] bg-[#010101] shadow-2xl">
            <div className="absolute inset-0 bg-[#010101]">
              <img
                src={src}
                alt="Macbook Screen"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Screen Glare Component */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-[40px] bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
          </div>
          {/* Base Keyboard base */}
          <div className="h-6 w-full max-w-full bg-[#272729] rounded-b-[40px] mt-1 relative z-10 shadow-xl overflow-hidden flex items-center justify-center">
            <div className="w-40 h-1 bg-[#1a1a1b] rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
