import React, { useRef, useLayoutEffect } from 'react';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Embedded minimal geometric Lottie JSON for a pulsing abstract shape
const abstractPulseData = {
  "v": "5.7.4",
  "fr": 60,
  "ip": 0,
  "op": 120,
  "w": 500,
  "h": 500,
  "nm": "Pulsing Circle",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0, "ind": 1, "ty": 4, "nm": "Shape Layer 1", "sr": 1,
      "ks": {
        "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [100] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 60, "s": [50] }, { "t": 120, "s": [100] }] },
        "r": { "a": 0, "k": 0 },
        "p": { "a": 0, "k": [250, 250, 0] },
        "a": { "a": 0, "k": [0, 0, 0] },
        "s": { "a": 1, "k": [{ "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 60, "s": [150, 150, 100] }, { "t": 120, "s": [100, 100, 100] }] }
      },
      "shapes": [
        {
          "ty": "el", "d": 1, "p": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [300, 300] }, "nm": "Ellipse Path 1", "hd": false
        },
        {
          "ty": "fl", "c": { "a": 0, "k": [1, 0, 0.8, 1] }, "o": { "a": 0, "k": 100 }, "nm": "Fill 1", "hd": false
        }
      ]
    }
  ]
};

const abstractBlobData = {
  ...abstractPulseData,
  "layers": [
     {
      "ddd": 0, "ind": 1, "ty": 4, "nm": "Shape Layer 1", "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100 }, "r": { "a": 1, "k": [{ "t": 0, "s": [0] }, { "t": 120, "s": [360] }] }, "p": { "a": 0, "k": [250, 250, 0] }, "a": { "a": 0, "k": [0, 0, 0] }, "s": { "a": 0, "k": [100, 100, 100] }
      },
      "shapes": [
        { "ty": "el", "d": 1, "p": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [350, 200] }, "nm": "Ellipse Path 1", "hd": false },
        { "ty": "fl", "c": { "a": 0, "k": [0, 1, 1, 1] }, "o": { "a": 0, "k": 100 }, "nm": "Fill 1", "hd": false }
      ]
    }
  ]
}

export const FloatingLotties = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a massive parallax effect on the lottie layers so they float past
      gsap.to('.lottie-bg-1', {
        y: '-100vh',
        x: '20vw',
        rotation: 45,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
        }
      });
      gsap.to('.lottie-bg-2', {
        y: '-150vh',
        x: '-30vw',
        rotation: -90,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1.5,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen w-full h-[200vh]">
      <div className="lottie-bg-1 absolute top-[20%] left-[-10%] w-[800px] h-[800px] opacity-30 blur-[40px] will-change-transform">
        <Lottie animationData={abstractPulseData} loop={true} />
      </div>
      <div className="lottie-bg-2 absolute top-[40%] right-[-10%] w-[1000px] h-[1000px] opacity-20 blur-[60px] will-change-transform">
        <Lottie animationData={abstractBlobData} loop={true} />
      </div>
    </div>
  );
};
