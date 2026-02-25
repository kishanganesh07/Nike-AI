import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../../constants/assets';

gsap.registerPlugin(ScrollTrigger);

/**
 * GravityDefier Component
 * Simulates a complex 3D zero-gravity physics environment where items
 * float into position on scroll and continuously undulate.
 */
export const GravityDefier = () => {
    const containerRef = useRef(null);
    const elementsRef = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: ASSETS.PHYSICS.GSAP_SCRUB,
                    pin: true
                }
            });

            // Massive background text scales up through the viewport
            tl.to('.gravity-text', { scale: 10, opacity: 0, ease: "power2.inOut", duration: 1 }, 0);

            // Floating shoes drift from extreme horizontal edges to the center
            const shoes = elementsRef.current;
            gsap.set(shoes, {
               x: (i) => (i % 2 === 0 ? -500 : 500),
               y: (i) => gsap.utils.random(-300, 300),
               rotation: (i) => gsap.utils.random(-45, 45),
               opacity: 0
            });

            tl.to(shoes, {
                x: 0,
                y: 0,
                rotation: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 0.8,
                stagger: 0.1
            }, 0);

            // Add floating sine wave effect during the pin for zero-gravity feel
            shoes.forEach(img => {
                gsap.to(img, {
                    y: "+=30",
                    rotation: "+=5",
                    yoyo: true,
                    repeat: -1,
                    duration: gsap.utils.random(2, 4),
                    ease: "sine.inOut"
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen bg-black relative overflow-hidden flex items-center justify-center">
            {/* Massive Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="gravity-text text-[20vw] font-display text-white/10 leading-none will-change-transform">GRAVITY</h2>
            </div>
            {/* Floating Shoe Cluster */}
            <div className="relative z-10 w-full max-w-4xl aspect-[2/1]">
                {ASSETS.IMAGES.ARCHIVE_SHOES.slice(0, 5).map((img, i) => (
                    <img 
                        key={i} 
                        ref={el => elementsRef.current[i] = el}
                        src={img} 
                        className="absolute w-64 h-auto rounded-2xl shadow-2xl shadow-black/50 will-change-transform"
                        style={{
                            left: `${(i * 15) + 10}%`,
                            top: `${(i % 2) * 20}%`,
                            zIndex: 10 - i
                        }}
                        alt="Floating Shoe Showcase"
                    />
                ))}
            </div>
        </section>
    );
};
