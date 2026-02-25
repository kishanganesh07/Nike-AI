import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitReveal } from '../components/SplitReveal';
import { Marquee } from '../components/Marquee';

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  {
    year: '1964',
    title: 'Blue Ribbon Sports',
    quote: 'There is no finish line.',
    body: 'Before the Swoosh, there was a handshake. Track coach Bill Bowerman and runner Phil Knight founded Blue Ribbon Sports with $500 each, operating out of the trunk of Knight’s vintage Plymouth Valiant.',
    color: '#d9fe00',
  },
  {
    year: '1971',
    title: 'The Waffle Iron',
    quote: 'Innovation is rebellion.',
    body: 'Looking for a better grip on Hayward Field’s new polyurethane track, Bowerman poured rubber into his wife’s waffle iron. The result? The revolutionary Waffle sole that changed running forever.',
    color: '#ffffff',
  },
  {
    year: '1987',
    title: 'Air Is Unleashed',
    quote: 'Make the invisible visible.',
    body: 'Inspired by the inside-out architecture of the Centre Pompidou in Paris, designer Tinker Hatfield cut a hole in the midsole of the Air Max 1, exposing Nike Air cushioning to the world.',
    color: '#d9fe00',
  },
  {
    year: '2012',
    title: 'The Flyknit Era',
    quote: 'Engineered to the millimeter.',
    body: 'Defying 40 years of shoe-making tradition, Nike engineered Flyknit. By micro-engineering every stitch to create a featherweight, virtually seamless upper, we reduced waste and maximized performance.',
    color: '#ffffff',
  },
  {
    year: '2026',
    title: 'A.I.R Architecture',
    quote: 'The future is algorithmic.',
    body: 'Welcome to the frontier. Predictive carbon chassis, generative traction patterns, and AI-optimized Flyknit. We aren’t just predicting the future of movement; we’re rendering it.',
    color: '#d9fe00',
  },
];

// ─── GSAP SCROLL TIMELINE ───────────────────────────────────────────────────
const GSAPTimeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Draw the center line as we scroll down the container
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1, // Tie strictly to scroll
          }
        }
      );

      // 2. Animate each timeline item in as the line reaches it
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(item, 
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%", // Reveal when item is 75% down screen
              end: "top 45%",
              scrub: 1,
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-32 bg-obsidian">
      {/* The Central Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10 z-0">
        <div 
          ref={lineRef}
          className="absolute top-0 w-full h-full bg-volt origin-top"
          style={{ boxShadow: "0 0 20px rgba(217,254,0,0.5)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {TIMELINE.map((era, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div 
              key={era.year} 
              ref={el => itemsRef.current[i] = el}
              className={`flex w-full mb-32 ${isLeft ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${isLeft ? 'pr-16 text-right' : 'pl-16 text-left'} relative`}>
                {/* Connecting dot */}
                <div className={`absolute top-1/2 w-4 h-4 rounded-full bg-obsidian border-2 border-volt -translate-y-1/2 z-20 ${isLeft ? '-right-2' : '-left-2'}`} />

                {/* Big Year Watermark */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 font-display text-[8rem] pointer-events-none select-none opacity-[0.03] ${isLeft ? 'right-0' : 'left-0'}`}
                  style={{ color: era.color }}
                >
                  {era.year}
                </div>

                <div className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: era.color }}>
                  {era.title}
                </div>
                
                <h3 className="font-display text-4xl lg:text-5xl text-white mb-6">
                  "{era.quote}"
                </h3>
                
                <p className="text-white/40 text-lg leading-relaxed">
                  {era.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Story = () => (
  <div id="story" className="min-h-screen bg-obsidian pt-[18vh]">
    {/* Header */}
    <section className="relative min-h-[70vh] md:h-[80vh] flex flex-col items-center justify-center bg-obsidian overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(217,254,0,0.06) 0%, transparent 70%)' }} />

      <div className="text-center relative z-10 px-8">
        <SplitReveal
          text="The Lineage."
          className="font-display text-[clamp(4rem,10vw,9rem)] text-white leading-tight mb-8"
        />
        <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
          From a hand-poured waffle iron to predictive AI architecture. Scroll to trace the line of innovation.
        </p>
      </div>
    </section>

    {/* GSAP Managed Timeline */}
    <GSAPTimeline />

    {/* Final Impact Area */}
    <section className="py-40 bg-obsidian text-center border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-volt/5 to-transparent pointer-events-none" />
      <div className="relative z-10">
        <SplitReveal text="The future is being written." className="font-display text-4xl lg:text-7xl text-white mb-16" />
        <Marquee speed={20} />
      </div>
    </section>
  </div>
);
