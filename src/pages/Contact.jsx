import { motion } from 'framer-motion';
import { SplitReveal } from '../components/SplitReveal';
import { MagneticButton } from '../components/MagneticButton';
import { TracingBeam } from '../components/TracingBeam';
import { SectionReveal } from '../components/SectionReveal';

export const Contact = () => {
  return (
    <SectionReveal>
      <div id="contact" className="min-h-screen bg-obsidian pt-[18vh] pb-24 md:pb-32 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #d9fe00 0%, transparent 70%)' }} />

        <TracingBeam className="px-4 sm:px-6 md:px-0">
          <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <SplitReveal text="GET IN TOUCH." className="font-display text-[5rem] lg:text-[7rem] text-white leading-none mb-8" />
              <p className="text-white/50 text-lg max-w-md mb-12">
                Have a question about our future drops, technologies, or press inquiries? We are here to connect.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-volt text-xs tracking-[0.2em] uppercase mb-2">Location</h4>
                  <p className="text-white">One Bowerman Drive<br/>Beaverton, OR 97005</p>
                </div>
                <div>
                  <h4 className="text-volt text-xs tracking-[0.2em] uppercase mb-2">Email</h4>
                  <p className="text-white hover:text-volt transition-colors cursor-view">future@nike.com</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.form 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-card p-10 flex flex-col gap-8"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-[0.2em] uppercase">Name</label>
                  <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-volt transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-[0.2em] uppercase">Email</label>
                  <input type="email" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-volt transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-[0.2em] uppercase">Message</label>
                  <textarea rows="4" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-volt transition-colors resize-none" />
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="self-start mt-4 bg-volt text-obsidian px-8 py-4 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white transition-colors cursor-view">
                  Send Transmission
                </motion.button>
              </motion.form>
            </div>
          </div>
        </TracingBeam>
      </div>
    </SectionReveal>
  );
};
