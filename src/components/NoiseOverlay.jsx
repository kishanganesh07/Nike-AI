export const NoiseOverlay = () => {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden opacity-[0.03] mix-blend-overlay">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[100%] h-[100%]">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.5" 
            numOctaves="2" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};
