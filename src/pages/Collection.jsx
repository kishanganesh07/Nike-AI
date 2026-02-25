import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SplitReveal } from '../components/SplitReveal';
import { ThreeDCard } from '../components/ThreeDCard';
import { Marquee } from '../components/Marquee';
import { HeroParallax } from '../components/HeroParallax';
import { ProductDetail } from './ProductDetail';

const FILTERS = ['All', 'Running', 'Lifestyle', 'Training', 'Racing'];

const PRODUCTS = [
  { id: 'air-max-2026', name: 'Air Max 2026', tag: 'Running', price: '$249', glow: '#d9fe00', size: 'large', thumbnail: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop', link: '#collection' },
  { id: 'pegasus-ultra', name: 'Pegasus Ultra', tag: 'Training', price: '$179', glow: '#ffffff', size: 'small', thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', link: '#collection' },
  { id: 'react-vision', name: 'React Vision', tag: 'Lifestyle', price: '$159', glow: '#ff4500', size: 'small', thumbnail: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop', link: '#collection' },
  { id: 'vaporfly-4', name: 'Vaporfly 4', tag: 'Racing', price: '$299', glow: '#00d4ff', size: 'small', thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop', link: '#collection' },
  { id: 'alpha-fly-3', name: 'Alpha Fly 3', tag: 'Racing', price: '$319', glow: '#9b59b6', size: 'large', thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop', link: '#collection' },
  { id: 'air-force-xl', name: 'Air Force XL', tag: 'Lifestyle', price: '$149', glow: '#ffffff', size: 'small', thumbnail: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop', link: '#collection' },
  { id: 'free-run-5', name: 'Free Run 5', tag: 'Running', price: '$129', glow: '#d9fe00', size: 'small', thumbnail: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop', link: '#collection' },
  { id: 'metcon-9', name: 'Metcon 9', tag: 'Training', price: '$139', glow: '#ff6b00', size: 'large', thumbnail: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=800&auto=format&fit=crop', link: '#collection' },
  { id: 'invincible-3', name: 'Invincible 3', tag: 'Running', price: '$189', glow: '#ff0055', size: 'small', thumbnail: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop', link: '#collection' },
  { id: 'infinity-rn', name: 'Infinity RN 4', tag: 'Running', price: '$169', glow: '#00ffaa', size: 'large', thumbnail: 'https://images.unsplash.com/photo-1584735174965-9828dc3d4ce4?q=80&w=800&auto=format&fit=crop', link: '#collection' },
];

const ProductCard = ({ product, index, onClick }) => (
  <ThreeDCard className="cursor-view">
    <button onClick={onClick} className="w-full text-left">
      <motion.div
        layout
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: index * 0.05 
        }}
        className="glass-card overflow-hidden group"
      >
        {/* Image area */}
        <div
          className={`relative overflow-hidden ${product.size === 'large' ? 'h-[280px]' : 'h-[220px]'}`}
          style={{ background: `radial-gradient(circle at center, ${product.glow}33 0%, transparent 70%)` }}
        >
          <motion.img
            src={product.thumbnail}
            className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
            <span className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
              View Details →
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 border-t border-white/5">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[9px] tracking-widest text-volt uppercase">{product.tag}</span>
              <h3 className="text-white font-bold text-lg mt-0.5">{product.name}</h3>
            </div>
            <span className="text-volt font-bold">{product.price}</span>
          </div>
        </div>
      </motion.div>
    </button>
  </ThreeDCard>
);

export const Collection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProductId, setSelectedProductId] = useState(null);

  const filtered = activeFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.tag === activeFilter);

  return (
    <div id="collection" className="min-h-screen bg-obsidian pt-[18vh] pb-24 md:pb-32 relative">
      {/* 3D Scrolling Hero Section */}
      <HeroParallax 
        products={PRODUCTS.map(p => ({ id: p.id, title: p.name, thumbnail: p.thumbnail }))} 
        onProductClick={(id) => setSelectedProductId(id)}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 mb-12 md:mb-16 mt-10 md:mt-16">
        <SplitReveal text="Explore and Filter" className="font-display text-4xl lg:text-5xl text-white mb-4" />
        <p className="text-white/30 max-w-lg">
          Zero in on the precise technology engineered for your discipline.
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 mb-10 md:mb-12">
        <div className="flex gap-3 flex-wrap">
          {FILTERS.map(filter => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 magnetic-target border ${
                activeFilter === filter
                  ? 'bg-volt text-obsidian border-volt'
                  : 'border-white/10 text-white/40 hover:border-volt/40 hover:text-white'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 pb-24 md:pb-32">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} onClick={() => setSelectedProductId(product.id)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
         {selectedProductId && (
             <ProductDetail 
               productId={selectedProductId} 
               thumbnail={PRODUCTS.find(p => p.id === selectedProductId)?.thumbnail}
               onClose={() => setSelectedProductId(null)} 
             />
         )}
      </AnimatePresence>

      <Marquee />
    </div>
  );
};
