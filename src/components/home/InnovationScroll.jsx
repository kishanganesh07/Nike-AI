import { StickyScroll } from "../StickyScroll";
import { ASSETS } from "../../constants/assets";

const innovationContent = [
  {
    title: "Aerodynamics Redefined",
    description:
      "Every curve and angle of our platform is engineered in a wind tunnel. By minimizing drag forces, we've increased running efficiency by up to 4%. The upper mesh aligns dynamically with your stride, creating a slipstream effect that propels you forward.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-obsidian">
        <img
          src={ASSETS.IMAGES.FEATURE_AERODYNAMICS}
          className="h-full w-full object-cover rounded-xl"
          alt="aerodynamics feature"
        />
      </div>
    ),
  },
  {
    title: "Reactive Kinetics",
    description:
      "Our proprietary foam isn't just a cushion—it's a spring system. Utilizing micro-cellular structures that compress and instantly rebound, it recycles up to 85% of your kinetic energy back into the next step, reducing fatigue on long runs.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-obsidian">
        <img
          src={ASSETS.IMAGES.FEATURE_KINETICS}
          className="h-full w-full object-cover rounded-xl"
          alt="reactive kinetics"
        />
      </div>
    ),
  },
  {
    title: "Interactive Fit",
    description:
      "Shoes that know your feet. Embedded micro-tension cables automatically adjust to your specific foot shape and swelling patterns during peak performance. It's an active, real-time customized lockdown that prevents slippage and blistering.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-obsidian">
        <img
          src={ASSETS.IMAGES.FEATURE_INTERACTIVE}
          className="h-full w-full object-cover rounded-xl"
          alt="interactive fit"
        />
      </div>
    ),
  },
];

export const InnovationScroll = () => {
  return (
    <section className="bg-obsidian w-full relative py-40 overflow-hidden">

      {/* 🔥 BACKGROUND GLOWS */}
      <div className="absolute top-[-120px] right-[10%] w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[-150px] left-[5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* ⭐ HEADER */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-20 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* TITLE */}
          <h2
            className="
              font-display
              text-6xl md:text-7xl lg:text-8xl
              text-white
              mb-8
              tracking-wider
              uppercase
              drop-shadow-[0_10px_50px_rgba(0,0,0,0.9)]
            "
          >
            INNOVATION LAB
          </h2>

          {/* NEON LINE */}
          <div
            className="
              w-32 h-[3px]
              bg-volt
              mb-10
              rounded-full
              shadow-[0_0_35px_rgba(217,254,0,0.95)]
            "
          ></div>

          {/* DESCRIPTION */}
          <p
            className="
              text-white/70
              max-w-3xl
              text-xl md:text-2xl
              leading-relaxed
            "
          >
            Discover the science behind our most advanced footwear.
            Scroll down to explore the core technologies powering
            the next generation of performance.
          </p>
        </div>
      </div>

      {/* ⭐ STICKY SCROLL SECTION */}
      <div className="container mx-auto px-4 md:px-8 xl:px-12 relative z-10">
        <StickyScroll content={innovationContent} />
      </div>
    </section>
  );
};