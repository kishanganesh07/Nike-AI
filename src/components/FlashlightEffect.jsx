import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const FlashlightEffect = () => {
    const maskRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to(maskRef.current, {
                '--mouse-x': `${e.clientX}px`,
                '--mouse-y': `${e.clientY}px`,
                duration: 0.4,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            ref={maskRef}
            className="fixed inset-0 z-[5] pointer-events-none overflow-hidden"
            style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent 0%, rgba(8, 8, 8, 0.2) 150px, rgba(8, 8, 8, 0.7) 400px)`,
                mixBlendMode: 'soft-light'
            }}
        />
    );
};
