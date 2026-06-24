import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, ArrowRight, Sun, Moon, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImg from '../assets/triple_charm_logo_1782321671631.jpg.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartClicks, setCartClicks] = useState<number[]>([]);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleCartClick = () => {
    const id = Date.now();
    setCartClicks((prev) => [...prev, id]);
    setTimeout(() => {
      setCartClicks((prev) => prev.filter((clickId) => clickId !== id));
    }, 1500); // Remove after animation
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-main dark:text-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links Left */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase hover:text-primary dark:hover:text-primary transition-colors ${
                isScrolled ? 'text-text-main dark:text-gray-100' : 'text-text-main dark:text-gray-100'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <a href="#" className="flex-shrink-0 text-center mx-4 flex flex-col items-center justify-center">
          <img src={logoImg} alt="Triple Charm Logo" className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-full border border-rosegold/20" />
        </a>

        {/* Desktop Links Right */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.slice(2, 4).map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase hover:text-primary dark:hover:text-primary transition-colors ${
                isScrolled ? 'text-text-main dark:text-gray-100' : 'text-text-main dark:text-gray-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button onClick={handleCartClick} aria-label="Shopping Cart" className="relative text-text-main dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
            <ShoppingBag size={20} />
            <AnimatePresence>
              {cartClicks.map((id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 1, scale: 0.5, y: 0, x: 0 }}
                  animate={{ 
                    opacity: 0, 
                    scale: 1.5, 
                    y: -40 - Math.random() * 20,
                    x: (Math.random() - 0.5) * 30 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute top-0 left-0 pointer-events-none text-primary"
                >
                  <Heart size={16} fill="currentColor" />
                </motion.div>
              ))}
            </AnimatePresence>
          </button>
          <button onClick={toggleDark} aria-label="Toggle Dark Mode" className="text-text-main dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Cart & Dark Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDark} aria-label="Toggle Dark Mode" className="text-text-main dark:text-gray-100">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={handleCartClick} aria-label="Shopping Cart" className="relative text-text-main dark:text-gray-100">
            <ShoppingBag size={24} />
            <AnimatePresence>
              {cartClicks.map((id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 1, scale: 0.5, y: 0, x: 0 }}
                  animate={{ 
                    opacity: 0, 
                    scale: 1.5, 
                    y: -40 - Math.random() * 20,
                    x: (Math.random() - 0.5) * 30 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute top-0 left-0 pointer-events-none text-primary"
                >
                  <Heart size={20} fill="currentColor" />
                </motion.div>
              ))}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-950"
      >
        <div className="flex flex-col px-6 py-4 space-y-4 border-t dark:border-gray-800">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-text-main dark:text-gray-100 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
