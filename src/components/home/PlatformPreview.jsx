import { MacbookScroll } from "../MacbookScroll";

export const PlatformPreview = () => {
  return (
    <div className="bg-[#010101] w-full relative pt-20 pb-0 overflow-hidden">
      <div className="container mx-auto px-8 relative z-10 text-center">
        <h2 className="font-display text-4xl lg:text-7xl text-white mb-6 tracking-tight">Sync With Your Run</h2>
        <p className="text-white/50 max-w-2xl text-lg mx-auto">
          Our footwear integrates seamlessly with the OmniTrack™ digital ecosystem. 
          Real-time metrics, predictive wear analytics, and personalized coaching—right on your dashboard.
        </p>
      </div>
      
      {/* 
        Using a dark tech/dashboard placeholder image for the macbook screen 
      */}
      <MacbookScroll
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
        badge={
          <div className="bg-volt text-obsidian px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mt-4 mr-4 shadow-[0_0_15px_rgba(217,254,0,0.5)]">
            Beta Access
          </div>
        }
      />
    </div>
  );
};
