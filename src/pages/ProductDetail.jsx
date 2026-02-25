import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { SplitReveal } from '../components/SplitReveal';
import { MagneticButton } from '../components/MagneticButton';
import { CountUp } from '../components/CountUp';
import { ASSETS } from '../constants/assets';

const PRODUCT_DATA = {
  'air-max-2026': {
    name: 'Air Max 2026',
    tag: 'Running',
    price: 249,
    tagline: 'The future runs on air.',
    desc: 'The Air Max 2026 represents the pinnacle of cushioning technology. With fifth-generation Air Max unit and a full-length React foam midsole, every step feels effortless.',
    colorways: ['#d9fe00', '#ffffff', '#ff4500', '#00d4ff', '#9b59b6'],
    specs: [
      { label: 'Weight', value: '240g' },
      { label: 'Drop', value: '10mm' },
      { label: 'Cushion', value: 'Max' },
      { label: 'Energy Return', value: '+15%' },
      { label: 'Upper', value: 'FlyKnit' },
      { label: 'Plate', value: 'Carbon' },
    ],
    technologies: [
      { name: 'Air Max Unit', desc: 'Fifth-generation Max Air visible heel unit delivers unrivaled impact absorption.' },
      { name: 'React Foam', desc: 'Full-length React midsole stretches energy return across the entire platform.' },
      { name: 'FlyKnit', desc: 'Precision-knit upper adapts to your foot shape in motion.' },
    ],
  },
};

// Fallback for unknown products
const DEFAULT_PRODUCT = {
  name: 'Nike Shoe',
  tag: 'Performance',
  price: 199,
  tagline: 'Built for greatness.',
  desc: 'Engineered with cutting-edge technology and premium materials for the modern athlete.',
  colorways: ['#d9fe00', '#ffffff', '#ff4500'],
  specs: [
    { label: 'Weight', value: '250g' },
    { label: 'Drop', value: '8mm' },
    { label: 'Cushion', value: 'High' },
    { label: 'Energy Return', value: '+12%' },
    { label: 'Upper', value: 'Mesh' },
    { label: 'Plate', value: 'TPU' },
  ],
  technologies: [
    { name: 'Zoom Air', desc: 'Responsive cushioning for explosive movement.' },
    { name: 'Flyknit', desc: 'Lightweight precision-engineered upper.' },
  ],
};

const SIZES = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12];

export const ProductDetail = ({ productId, thumbnail, onClose }) => {
  const id = productId;
  const product = PRODUCT_DATA[id] || { ...DEFAULT_PRODUCT, name: id?.split('-').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' ') || 'Nike Shoe' };
  const [activeColor, setActiveColor] = useState(0);
  const [activeSize, setActiveSize] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [added, setAdded] = useState(false);
  const ref = useRef(null);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      ref={ref} 
      className="fixed inset-0 z-[100] bg-obsidian overflow-y-auto w-full h-full"
    >
      {/* Header Back Button */}
      <div className="sticky top-0 z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8 py-4 md:py-6">
          <button onClick={onClose} className="flex items-center gap-3 text-white/50 hover:text-volt transition-colors text-sm tracking-widest uppercase magnetic-target w-max font-bold">
            <ArrowLeft className="w-5 h-5" /> Close Details
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Shoe visual (Left Column) */}
        <div className="relative flex items-center justify-center p-4 lg:p-10 bg-white/5 rounded-[40px] border border-white/10 overflow-hidden h-max min-h-[500px] cursor-grab active:cursor-grabbing">
          <div className="absolute inset-0 rounded-[40px]"
            style={{ background: `radial-gradient(circle at center, ${product.colorways[activeColor]}20 0%, transparent 80%)` }} />
          
          <div className="absolute inset-0 z-10 p-10 flex text-center">
             <div className="text-white/20 uppercase tracking-widest text-[10px] absolute bottom-6 w-full font-bold left-0">Interactive 3D Asset - Drag to Rotate</div>
          </div>
          <motion.div 
            className="w-full relative z-20 h-full min-h-[500px] flex items-center justify-center pointer-events-none" 
            key={activeColor}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <img 
               src={thumbnail || ASSETS.IMAGES.ARCHIVE_SHOES[0]} 
               alt={product.name} 
               className="w-4/5 object-contain rotate-[-15deg] drop-shadow-[0_40px_40px_rgba(0,0,0,0.8)]"
               style={{ filter: `drop-shadow(0px -10px 30px ${product.colorways[activeColor]}40)` }}
            />
          </motion.div>
        </div>

        {/* Info Box (Right Column) */}
        <div className="flex flex-col justify-center max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-volt" />
            <span className="text-volt text-xs tracking-[0.4em] uppercase font-bold">{product.tag}</span>
          </div>
          
          <SplitReveal text={product.name} className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-2 leading-none" />
          <p className="text-volt font-medium text-lg mb-6 italic">{product.tagline}</p>
          <p className="text-white/50 leading-relaxed mb-10">{product.desc}</p>

          {/* Colorways */}
          <div className="mb-10">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-4 font-bold">Colorway</p>
            <div className="flex gap-4">
              {product.colorways.map((color, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveColor(i)}
                  className={`w-10 h-10 rounded-full border-2 transition-all shadow-lg ${activeColor === i ? 'border-white scale-110 ring-4 ring-white/10' : 'border-white/20'}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select colorway ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Sizes Grid */}
          <div className="mb-12">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-4 font-bold">Select Size (US)</p>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
              {SIZES.map(size => (
                <motion.button
                  key={size}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSize(size)}
                  className={`py-3 md:py-4 rounded-xl text-sm font-bold transition-all border ${
                    activeSize === size
                      ? 'bg-volt text-obsidian border-volt shadow-[0_0_20px_rgba(217,254,0,0.4)]'
                      : 'bg-white/5 border-white/10 text-white/70 hover:border-volt/40 hover:text-white'
                  }`}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Pricing & Call to Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mt-auto pt-6 border-t border-white/5">
            <div>
              <div className="text-white/30 text-xs tracking-widest uppercase mb-1 font-bold">Price</div>
              <div className="font-display text-5xl text-volt leading-none drop-shadow-[0_0_15px_rgba(217,254,0,0.5)]">${product.price}</div>
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto flex-1">
              <MagneticButton
                onClick={handleAddToCart}
                className={`flex-1 py-5 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-500 shadow-xl ${
                  added ? 'bg-green-400 text-black' : 'bg-white text-obsidian hover:bg-volt hover:shadow-[0_0_30px_rgba(217,254,0,0.5)]'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {added ? 'Added to Bag' : 'Add to Cart'}
              </MagneticButton>
              
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-volt hover:border-volt/40 hover:bg-volt/5 transition-all"
                aria-label="Add to favorites"
              >
                <Heart className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Info Section */}
      <section className="border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-4 md:px-8">
          {/* Tab Headers */}
          <div className="flex gap-8 md:gap-12 border-b border-white/5 overflow-x-auto no-scrollbar">
            {['overview', 'technology', 'specs'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-8 whitespace-nowrap text-sm tracking-widest uppercase font-bold transition-all border-b-2 -mb-px px-2 ${
                  activeTab === tab 
                    ? 'border-volt text-volt' 
                    : 'border-transparent text-white/40 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="py-16 md:py-24">
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-[28px] p-10 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors shadow-2xl">
                    <div className="font-display text-6xl text-white mb-3 text-glow-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"><CountUp end={240} suffix="g" /></div>
                    <div className="text-volt text-xs tracking-widest uppercase font-bold">Ultra Lightweight</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-[28px] p-10 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors shadow-2xl">
                    <div className="font-display text-6xl text-white mb-3 text-glow-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"><CountUp end={15} suffix="%" prefix="+" /></div>
                    <div className="text-volt text-xs tracking-widest uppercase font-bold">Energy Return</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-[28px] p-10 text-center flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1 hover:bg-white/10 transition-colors shadow-2xl">
                    <div className="font-display text-6xl text-white mb-3 text-glow-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"><CountUp end={500} suffix="km" /></div>
                    <div className="text-volt text-xs tracking-widest uppercase font-bold">Rated Lifespan</div>
                  </div>
                </div>

                {/* New Premium Overview Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-8 border-t border-white/5">
                  <div className="order-2 lg:order-1 relative rounded-[40px] overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl group">
                    <img 
                       src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1200&auto=format&fit=crop" 
                       alt="Material details" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                       <p className="text-white font-bold tracking-[0.2em] uppercase text-xs opacity-70 mb-2">Material Science</p>
                       <p className="text-white/90 text-sm">Hyper-thread structural mesh integration.</p>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="font-display text-4xl lg:text-5xl text-white mb-8 leading-tight tracking-tight">Engineered to <br/><span className="text-volt">shatter boundaries.</span></h3>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      Every curve and stitch of the {product.name} is born from thousands of hours of computational modeling and athlete data. We reduced the upper mass by 18% while enhancing structural integrity through advanced polymeric threading.
                    </p>
                    <ul className="text-white/60 space-y-4">
                      <li className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-volt shadow-[0_0_10px_rgba(217,254,0,0.8)]"></span>
                        <span className="text-white/80 font-medium">Adaptive micro-fit architecture</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-volt shadow-[0_0_10px_rgba(217,254,0,0.8)]"></span>
                        <span className="text-white/80 font-medium">Aero-sculpted heel counter</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-volt shadow-[0_0_10px_rgba(217,254,0,0.8)]"></span>
                        <span className="text-white/80 font-medium">Propulsive geometry mapping</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'technology' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.technologies.map((tech, i) => (
                  <div key={tech.name} className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-volt/30 transition-all duration-500 group shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <div className="w-16 h-16 rounded-[20px] bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:border-volt/50 group-hover:bg-volt/10 transition-colors">
                      <span className="text-volt font-display text-2xl leading-none">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-bold text-white text-2xl mb-4 tracking-tight drop-shadow-md">{tech.name}</h3>
                    <p className="text-white/50 text-base leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}
            
            {activeTab === 'specs' && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-volt/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  
                  <h3 className="text-3xl md:text-4xl font-display text-white mb-12 pb-8 border-b border-white/10 flex items-center gap-4">
                    <span className="w-2 h-8 bg-volt rounded-full"></span>
                    Technical Specifications
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
                    {product.specs.map((spec, i) => (
                      <div key={spec.label} className="flex flex-col gap-3 group">
                        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold group-hover:text-volt/80 transition-colors">{spec.label}</span>
                        <span className="text-white font-medium text-xl bg-black/40 border border-white/5 px-6 py-5 rounded-2xl group-hover:border-white/20 transition-colors">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
