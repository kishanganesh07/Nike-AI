import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { SmoothScroll } from './components/SmoothScroll';
import { PageTransition } from './components/PageTransition';
import { NoiseOverlay } from './components/NoiseOverlay';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Preloader3D } from './components/Preloader3D';
import { AnimatePresence } from 'framer-motion';

// LAZY LOAD PAGES FOR PERFORMANCE
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Collection = lazy(() => import('./pages/Collection').then(module => ({ default: module.Collection })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then(module => ({ default: module.ProductDetail })));
const Story = lazy(() => import('./pages/Story').then(module => ({ default: module.Story })));
const Technologies = lazy(() => import('./pages/Technologies').then(module => ({ default: module.Technologies })));
// const AILab = lazy(() => import('./pages/AILab').then(module => ({ default: module.AILab })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!introComplete && (
          <Preloader3D key="preloader" onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${introComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <SmoothScroll>
          <NoiseOverlay />
          <BackgroundParticles />
          <div className="relative bg-transparent text-white selection:bg-volt selection:text-black min-h-screen">
            <Navbar />

        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-obsidian">
            <div className="w-12 h-12 border-2 border-volt border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/technology" element={<Technologies />} />
              {/* <Route path="/ai-lab" element={<AILab />} /> */}
              <Route path="/story" element={<Story />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </PageTransition>
        </Suspense>

        {/* Footer */}
        <footer className="border-t border-white/5 py-10 bg-obsidian">
          <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-display text-2xl text-white tracking-widest">NIKE</span>
            <div className="flex gap-8 text-white/20 text-xs tracking-widest uppercase">
              <a href="#" className="hover:text-volt transition-colors magnetic-target">Privacy</a>
              <a href="#" className="hover:text-volt transition-colors magnetic-target">Terms</a>
              <a href="#" className="hover:text-volt transition-colors magnetic-target">Contact</a>
            </div>
            <span className="text-white/20 text-xs tracking-widest">© 2026 Nike, Inc. All Rights Reserved</span>
          </div>
        </footer>
          </div>
        </SmoothScroll>
      </div>
    </>
  );
}

export default App;
