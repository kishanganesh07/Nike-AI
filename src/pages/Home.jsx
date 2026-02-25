import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

import { ASSETS } from '../constants/assets';

// Global / Shared Components
import { FloatingLotties } from '../components/FloatingLotties';

// Modular Home Sections
import { GlobalWebGLBackground } from '../components/home/GlobalWebGLBackground';
import { SplineHero } from '../components/home/SplineHero';
import { GridAssemble } from '../components/home/GridAssemble';
import { ParallaxGrid } from '../components/home/ParallaxGrid';
import { StickySwap } from '../components/home/StickySwap';
import { GravityDefier } from '../components/home/GravityDefier';
import { InnovationScroll } from '../components/home/InnovationScroll';
import { PlatformPreview } from '../components/home/PlatformPreview';
import { HorizontalShowcase } from '../components/home/HorizontalShowcase';
import { NikeScrollAnimation } from '../components/home/NikeScrollAnimation';
import { AnatomyExploded } from '../components/home/AnatomyExploded';
import { CarbonPlateScroll } from '../components/home/CarbonPlateScroll';
import { FoamCushioning } from '../components/home/FoamCushioning';
import { TractionPattern } from '../components/home/TractionPattern';
import { LacingSystem } from '../components/home/LacingSystem';
import { HypermeshUpper } from '../components/home/HypermeshUpper';
import { SustainableManufacturing } from '../components/home/SustainableManufacturing';
import { RunnerTelemetry } from '../components/home/RunnerTelemetry';
import { ColorwayGallery } from '../components/home/ColorwayGallery';
import { HeritageTimeline } from '../components/home/HeritageTimeline';
import { InfiniteMarqueeLayer } from '../components/home/InfiniteMarqueeLayer';
import { FinalCta } from '../components/home/FinalCta';

// Project Pages & Containers
import { Collection } from './Collection';
import { Technologies } from './Technologies';

gsap.registerPlugin(ScrollTrigger);

// PERFORMANCE ENGINE LOCK-IN
ScrollTrigger.config({ limitCallbacks: true });
if (typeof window !== 'undefined') {
  ScrollTrigger.normalizeScroll(true);
}

// INTELLIGENT ON-SCROLL MOUNTING
const LazySection = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className="min-h-[10vh] relative py-24 md:py-32">
      {isVisible ? children : <div className="h-screen w-full bg-transparent" />}
    </div>
  );
};

export const Home = () => {
    const [activeChapter, setActiveChapter] = useState(ASSETS.SCROLL_CHAPTERS[0].id);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveChapter(entry.target.id);
            }
          });
        },
        {
          root: null,
          threshold: 0.4,
        }
      );

      ASSETS.SCROLL_CHAPTERS.forEach((chapter) => {
        const el = document.getElementById(chapter.id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }, []);

    const scrollToChapter = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
        <div className="bg-obsidian w-full min-h-screen relative">
            <GlobalWebGLBackground />

            {/* Minimalist Floating Sidebar */}
            <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 group">
              <div className="absolute top-0 bottom-0 right-[-10px] w-48 -z-10 bg-transparent group-hover:bg-obsidian/40 group-hover:backdrop-blur-md transition-all duration-500 rounded-2xl border border-transparent group-hover:border-white/5 opacity-0 group-hover:opacity-100 pointer-events-none" />
              
              {ASSETS.SCROLL_CHAPTERS.map((chapter, index) => {
                const isActive = activeChapter === chapter.id;
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => scrollToChapter(chapter.id)}
                    className="relative flex items-center justify-end h-4 w-full cursor-pointer group/btn"
                  >
                    <span
                      className={`absolute right-6 text-[10px] tracking-[0.35em] uppercase whitespace-nowrap transition-all duration-500 ease-out ${
                        isActive 
                          ? 'text-volt opacity-100 translate-x-0' 
                          : 'text-white/60 opacity-0 translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')} {chapter.label}
                    </span>
                    <motion.div
                      animate={{
                        scale: isActive ? 1.4 : 1,
                        opacity: isActive ? 1 : 0.3,
                        backgroundColor: isActive ? 'var(--color-volt)' : 'white'
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="w-1.5 h-1.5 rounded-full z-10"
                    />
                  </button>
                );
              })}
            </div>
            
            <div id="home" className="relative">
             {/* The new Dribbble-style rotating shoe parallax component */}
            <NikeScrollAnimation />
                <FloatingLotties />
                <section id="chapter-hero">
                  <SplineHero />
                </section>
                
                <LazySection>
                  <section id="chapter-archive">
                    <GridAssemble />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-speed">
                    <ParallaxGrid />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-anatomy">
                    <AnatomyExploded />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-carbon">
                    <CarbonPlateScroll />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-foam">
                    <FoamCushioning />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-deconstruct">
                    <StickySwap />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-gravity">
                    <GravityDefier />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-innovation">
                    <InnovationScroll />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-traction">
                    <TractionPattern />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-lockdown">
                    <LacingSystem />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-hypermesh">
                    <HypermeshUpper />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-telemetry">
                    <RunnerTelemetry />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-eco">
                    <SustainableManufacturing />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-heritage">
                    <HeritageTimeline />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-colorways">
                    <ColorwayGallery />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-platform">
                    <PlatformPreview />
                  </section>
                </LazySection>

                <LazySection>
                  <section id="chapter-showcase">
                    <HorizontalShowcase />
                  </section>
                </LazySection>
            </div>
            
            <LazySection><Collection /></LazySection>
            <LazySection><Technologies /></LazySection>
            
            <InfiniteMarqueeLayer />
            <FinalCta />
        </div>
    );
};
