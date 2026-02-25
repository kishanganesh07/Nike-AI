import { SplitReveal } from '../SplitReveal';
import { TypewriterText } from '../TypewriterText';
import { MagneticButton } from '../MagneticButton';

export const FinalCta = () => (
  <section className="relative h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden [perspective:1000px]">
    <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
         style={{ background: 'radial-gradient(ellipse at center, rgba(255,0,255,0.15) 0%, rgba(0,255,255,0.1) 40%, transparent 80%)' }} />

    <div className="relative text-center px-8 z-10 w-full max-w-5xl">
      <SplitReveal 
         text="JUST DO IT." 
         className="font-display text-[clamp(4rem,14vw,14rem)] leading-none mb-8 neon scale-110" 
      />
      <TypewriterText
        text="The future is not predicted. It's built."
        className="text-white/30 text-lg tracking-widest block mb-12 font-bold"
        delay={800}
        speed={40}
      />
      <a href="#collection">
        <MagneticButton className="bg-gradient-to-r from-volt via-[#ff00ff] to-[#00ffff] text-obsidian font-bold px-12 py-5 rounded-full text-sm tracking-widest uppercase hover:brightness-150 transition-all duration-300 text-lg shadow-[0_0_30px_rgba(255,0,255,0.4)]">
          Explore Collection →
        </MagneticButton>
      </a>
    </div>
  </section>
);
