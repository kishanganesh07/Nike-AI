import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, X, Menu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Collection', path: '/collection' },
  { label: 'Technology', path: '/technology' },
  { label: 'AI Lab', path: '/ai-lab' },
  { label: 'Story', path: '/story' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(window.location.pathname || '/');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "navbar-scroll",
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const scrollPos = self.scroll();
          setScrolled(scrollPos > 40);
          setHidden(self.direction === 1 && scrollPos > 150);
        }
      });
    });
    
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    const timeoutId = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
      ctx.revert();
    };
  }, [location.pathname]);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-[18px] left-1/2 -translate-x-1/2 z-50 px-8 py-4 flex items-center justify-between transition-all duration-500 will-change-transform rounded-[14px] border border-white/5
          ${scrolled 
            ? 'w-[calc(100%-40px)] max-w-[1400px] bg-obsidian/60 backdrop-blur-[14px] border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]' 
            : 'w-[calc(100%-40px)] max-w-[1400px] bg-transparent border-transparent'
          }`}
      >
        {/* Logo */}
        <a href="/" onClick={(e) => handleNavClick(e, '/')} className="magnetic-target">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-white font-display text-3xl tracking-widest hover:text-volt transition-colors duration-300"
          >
            NIKE
          </motion.div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, path }) => {
            const isActive = activeSection === path;
            return (
              <a key={path} href={path} onClick={(e) => handleNavClick(e, path)} className="relative group magnetic-target">
                <span className={`text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive ? 'text-volt' : 'text-white/60 hover:text-white'
                }`}>
                  {label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-px bg-volt transition-all duration-500 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <motion.button whileHover={{ scale: 1.1 }} className="text-white/60 hover:text-volt transition-colors magnetic-target hidden md:block">
            <Search className="w-5 h-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="text-white/60 hover:text-volt transition-colors magnetic-target hidden md:block">
            <ShoppingBag className="w-5 h-5" />
          </motion.button>
          
          {/* Mobile menu toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white magnetic-target"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map(({ label, path }, i) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <a href={path} onClick={(e) => handleNavClick(e, path)} className="font-display text-5xl text-white hover:text-volt transition-colors">
                  {label}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
