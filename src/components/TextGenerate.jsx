import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "../utils/cn";

export const TextGenerate = ({
  words,
  className,
  delay = 0.5,
}) => {
  const [complete, setComplete] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      controls.start((i) => ({
        opacity: 1,
        filter: "blur(0px)",
        transition: { delay: i * 0.2 + delay, duration: 0.5 },
      })).then(() => setComplete(true));
    }
  }, [isInView, controls, delay]);

  const renderWords = () => {
    return (
      <motion.div ref={ref}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              custom={idx}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={controls}
              className={cn(
                "opacity-0",
                word.toLowerCase() === "omni" || word.toLowerCase() === "extraordinary"
                  ? "text-volt"
                  : "text-white"
              )}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
