import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../constants/assets';

export const Preloader3D = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 3000; // 3 seconds cinematic intro
    const interval = 30; // 30ms updates
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      
      // Easing function for progress counter (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - currentProgress / 100, 4);
      setProgress(Math.round(easeProgress * 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete(); // Trigger exit animation
        }, 500); // Brief pause at 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-10%', filter: 'blur(20px)' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D Cinematic Background Video */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: isVideoLoaded ? 0.6 : 0 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover"
        >
          <source src={ASSETS.VIDEO.INTRO_3D_LOOP} type="video/mp4" />
        </video>
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </motion.div>

      {/* Loading Typograpy */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm">
        <div className="overflow-hidden mb-8">
            <motion.h1 
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="font-display text-4xl md:text-6xl text-white tracking-[0.3em] uppercase mix-blend-difference"
            >
                NIKE
            </motion.h1>
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="font-display text-sm md:text-base text-volt tracking-[0.5em] mt-2 uppercase text-center"
            >
              Innovation Lab
            </motion.div>
        </div>

        {/* Progress Counter & Bar */}
        <div className="w-full px-8 relative">
            <div className="flex justify-between items-end mb-4 font-display text-white/50 text-xs tracking-widest uppercase">
                <span>Initializing Physics</span>
                <span className="text-white text-lg w-12 text-right">{progress}%</span>
            </div>
            <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                <motion.div 
                    className="absolute top-0 left-0 h-full bg-volt shadow-[0_0_15px_rgba(217,254,0,0.8)]"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
      </div>
    </motion.div>
  );
};
