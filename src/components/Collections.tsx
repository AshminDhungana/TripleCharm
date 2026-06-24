import { motion } from 'motion/react';

const collections = [
  {
    title: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Dresses',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Casual Wear',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Best Sellers',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
];

export function Collections() {
  return (
    <section id="collections" className="py-24 bg-ivory dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-text-main dark:text-white mb-4 transition-colors duration-300"
          >
            Featured Collections
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300"
          >
            Explore our curated selections designed for every occasion, blending comfort with luxury.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {collections.map((item, index) => (
            <motion.a
              href="#contact"
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-lg ${item.colSpan} min-h-[300px] block`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-heading mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <span className="self-start text-white border-b border-white pb-1 text-sm font-medium tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Shop Now
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
