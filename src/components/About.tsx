import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-t-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=1000" 
                alt="Three Sisters" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary dark:bg-gray-800 rounded-full -z-10 blur-2xl opacity-70 transition-colors duration-300"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-text-main dark:text-white mb-6 leading-tight transition-colors duration-300">
              Three Sisters, <br/> One Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              Founded by three passionate sisters, TRIPLE CHARM CLOTHING was born from a shared love for fashion and a vision to empower women. We believe that what you wear is an expression of your individuality and confidence.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed transition-colors duration-300">
              Our collections are carefully curated to blend modern trends with timeless elegance, offering premium quality fashion essentials that seamlessly transition from casual days to special occasions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading text-xl font-semibold text-text-main dark:text-white mb-2 transition-colors duration-300">Confidence</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Clothing designed to make you feel your absolute best.</p>
              </div>
              <div>
                <h4 className="font-heading text-xl font-semibold text-text-main dark:text-white mb-2 transition-colors duration-300">Elegance</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Sophisticated pieces for the modern fashion-conscious woman.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
