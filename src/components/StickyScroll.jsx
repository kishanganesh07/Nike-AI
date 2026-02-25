"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "../utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: false,
  }).on("change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--color-obsidian)",
    "black",
    "var(--color-obsidian)",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[80vh] min-h-[500px] overflow-y-auto flex justify-center relative rounded-[40px] p-6 md:p-10 lg:p-16 border border-white/5 shadow-2xl scrollbar-hide"
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-full max-w-7xl">
        <div className="w-full lg:w-1/2 pe-4 lg:pe-16 pb-32">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-32 lg:my-48 first:mt-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                  x: activeCard === index ? 0 : -10
                }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6 leading-tight tracking-tight"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.2,
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      
      <div
        className={cn(
          "hidden lg:flex w-1/2 h-full sticky top-0 items-center justify-center",
          contentClassName
        )}
      >
        <div className="w-full max-w-md aspect-square rounded-[40px] overflow-hidden glass-card border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group relative">
             <div className="absolute -inset-10 bg-volt/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            {content[activeCard].content ?? null}
        </div>
      </div>
    </motion.div>
  );
};
