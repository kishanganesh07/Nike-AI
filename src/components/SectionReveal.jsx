import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const SectionReveal = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [
      "circle(0% at 50% 50%)",
      "circle(100% at 50% 50%)",
      "circle(100% at 50% 50%)",
      "circle(0% at 50% 50%)",
    ]
  );

  return (
    <motion.div ref={ref} style={{ clipPath }} className="relative">
      {children}
    </motion.div>
  );
};
