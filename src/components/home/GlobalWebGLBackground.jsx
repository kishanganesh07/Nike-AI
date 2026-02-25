import { useRef, useEffect, useLayoutEffect, memo, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../../constants/assets';

gsap.registerPlugin(ScrollTrigger);

export const GlobalWebGLBackground = memo(() => {
  const webglRef = useRef(null);
  const [shouldRender] = useState(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
    const isMobile = window.innerWidth < 768;
    const cores = navigator.hardwareConcurrency || 4;
    const isLowPower = cores < 4;
    return !isMobile && !isLowPower;
  });

  useLayoutEffect(() => {
    if (!shouldRender || !webglRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(webglRef.current, {
        rotation: 360,
        y: '20vh',
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: ASSETS.PHYSICS.GSAP_SCRUB,
        },
      });
    }, webglRef);

    return () => ctx.revert();
  }, [shouldRender]);

  if (!shouldRender) {
    return (
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(circle_at_center,#1a1a2e_0%,#0f0c29_45%,#050505_100%)]" />
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
      <div
        ref={webglRef}
        className="relative w-full h-[120vh] -mt-[10vh]"
      >
        {/* Soft radial glow core */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,254,0,0.3)_0%,transparent_55%)] opacity-70 blur-3xl" />

        {/* Aurora band using existing utility animation */}
        <div
          className="absolute inset-[-20%] animate-aurora opacity-40 mix-blend-screen"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(217,254,0,0.28), rgba(255,0,255,0.35), rgba(0,255,255,0.3))',
            backgroundSize: '200% 200%',
          }}
        />

        {/* Dark vignette edges to keep focus on content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_75%)]" />
      </div>
    </div>
  );
});
