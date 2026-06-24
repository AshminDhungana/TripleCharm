import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero_background_1782321694824.png';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-secondary dark:bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-gray-900">
        <img 
          src={heroBg} 
          alt="Fashion Background" 
          className="w-full h-full object-cover object-center opacity-40 dark:opacity-20 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 dark:from-gray-950/90 dark:via-gray-950/70 dark:to-gray-950/90 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/60 dark:border-gray-800/60 shadow-2xl transition-colors duration-300"
        >
          <span className="text-sm md:text-base tracking-[0.2em] text-rosegold uppercase font-medium mb-4 block">
            Three Sisters, One Vision
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-text-main dark:text-white leading-tight mb-6 transition-colors duration-300">
            Elegance <br className="md:hidden" /> Redefined
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-body max-w-2xl mx-auto mb-10 transition-colors duration-300">
            Discover trendy clothing, accessories, and fashion essentials for women who want to express confidence and individuality.
          </p>
          
          <motion.a
            href="#collections"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center space-x-2 bg-text-main text-white dark:bg-white dark:text-text-main px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors duration-300 shadow-xl"
          >
            <span>Shop New Arrivals</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 md:left-32 w-24 h-24 rounded-full border border-primary/30 -z-10"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-40 right-10 md:right-32 w-40 h-40 rounded-full border border-rosegold/20 -z-10"
      />
    </section>
  );
}
