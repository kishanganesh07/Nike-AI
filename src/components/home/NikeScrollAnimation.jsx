import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const NikeScrollAnimation = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // We define 3 distinct "states" or "styles" based on scroll progress (0 to 1)
    
    // Background Colors for each of the 3 styles
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.9, 1],
        ['#F4F4F4', '#F4F4F4', '#FFB03A', '#FFB03A', '#81D4FA']
    );

    // Shoe Rotation (simulating 3D spin)
    // We rotate slightly, then do a quick spin during transition, then settle
    const rotate = useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.9, 1],
        [-15, -5, 180, 190, 345] // spins on transition
    );

    // Shoe Scale (Subtle breathing/scaling effect)
    const scale = useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.9, 1],
        [1, 1.1, 0.8, 1.1, 1] // Shrinks slightly during transition then grows
    );

    // Background Text Y Parallax
    const bgTextY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

    // UI Opacity (Hide UI during the fast spin transition)
    const uiOpacity = useTransform(
        scrollYProgress,
        [0, 0.35, 0.5, 0.85, 1],
        [1, 0, 0, 0, 1]
    );

    // Text content changes based on scroll
    const TextStates = [
        { title: "NIKE AIR MAX 90", color: "#81D4FA", uiColor: "#000" },
        { title: "NIKE DUNK LOW", color: "#FFF", uiColor: "#000" },
        { title: "NIKE BLAZER MID", color: "#FFF", uiColor: "#000" }
    ];

    // For simplicity, we use one high-res transparent shoe right now, 
    // but in a production environment this would swap SRCs or use Spline 3D.
    // Using a clear cutout from Unsplash for demonstration.
    const SHOE_IMG = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"; 
    // Note: The ideal reference uses a transparent PNG. We'll use CSS mix-blend-mode to fake it 
    // if using a standard JPG, or just rely on the pure rotation effect.

    return (
        <section ref={containerRef} className="relative h-[300vh] w-full bg-obsidian">
            {/* Sticky Container */}
            <motion.div 
                className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-8"
                style={{ backgroundColor }}
            >
                
                {/* Background Parallax Typography */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-40 mix-blend-overlay"
                    style={{ y: bgTextY }}
                >
                    <h1 className="text-[20vw] md:text-[25vw] font-display font-black text-black whitespace-nowrap leading-none tracking-tighter">
                        AIR MAX
                    </h1>
                </motion.div>

                {/* Top Navigation / UI (Fades out during transition) */}
                <motion.div 
                    style={{ opacity: uiOpacity }}
                    className="absolute top-8 left-8 right-8 flex justify-between items-center z-20 text-black font-medium"
                >
                    <div className="flex gap-8 text-sm uppercase tracking-widest hidden md:flex">
                        <span className="font-bold border-b-2 border-black pb-1">Men</span>
                        <span className="opacity-50 hover:opacity-100 cursor-pointer">Women</span>
                        <span className="opacity-50 hover:opacity-100 cursor-pointer">Kids</span>
                    </div>
                    <div className="text-xl font-bold tracking-tight">NIKE AIR MAX 90 FUTURA</div>
                </motion.div>

                {/* The 3D Rotating Shoe */}
                <div className="relative z-10 w-full max-w-5xl aspect-video flex items-center justify-center">
                     <motion.img 
                        src={SHOE_IMG}
                        style={{ 
                            rotate, 
                            scale,
                            filter: 'drop-shadow(0px 50px 30px rgba(0,0,0,0.5))'
                        }}
                        className="w-[80%] md:w-[60%] lg:w-[50%] object-contain rounded-full mix-blend-multiply" // mix-blend helps fake transparency on light BGs
                        alt="Nike Air Max"
                     />
                </div>

                {/* Bottom UI / Add to Cart */}
                <motion.div 
                    style={{ opacity: uiOpacity }}
                    className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-20"
                >
                    <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-black shadow-xl">
                        <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Select Size</p>
                        <p className="font-bold text-lg">UK 9.5</p>
                    </div>

                    <button className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black/80 transition-colors shadow-2xl flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        Add to Bag
                    </button>
                </motion.div>

                {/* Next/Prev Style Buttons (Visual only for the scrollytelling effect) */}
                <motion.div 
                    style={{ opacity: uiOpacity }}
                    className="absolute top-1/2 -translate-y-1/2 right-8 z-20"
                >
                    <div className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
                        Next Style &rarr;
                    </div>
                </motion.div>
                
            </motion.div>
        </section>
    );
};
