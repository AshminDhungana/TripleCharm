import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Priya S.",
    comment: "The quality of the dresses is absolutely stunning. I felt so confident wearing my new outfit to my best friend's wedding!",
    rating: 5,
  },
  {
    name: "Aarohi K.",
    comment: "Triple Charm has become my go-to for both casual wear and special occasions. Fast shipping and the materials are so premium.",
    rating: 5,
  },
  {
    name: "Sneha S.",
    comment: "I love the 'Three Sisters' concept! The customer service is incredibly personal and helpful. The clothes fit perfectly.",
    rating: 5,
  },
  {
    name: "Kritika M.",
    comment: "Finally found a brand that offers luxury aesthetics without breaking the bank. The elegant packaging was a lovely surprise too.",
    rating: 5,
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-primary/5 dark:bg-gray-900/50 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading text-text-main dark:text-white mb-4 transition-colors duration-300"
            >
              Loved by Women Worldwide
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300 transition-colors duration-300"
            >
              Don't just take our word for it. Here is what our beautiful community has to say about their Triple Charm experience.
            </motion.p>
          </div>
        </div>

        {/* CSS Carousel / Scroll Snap */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-secondary/50 dark:border-gray-700 snap-center flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                <div className="flex space-x-1 mb-6 text-rosegold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed transition-colors duration-300">
                  "{review.comment}"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-secondary dark:bg-gray-700 rounded-full flex items-center justify-center font-heading font-bold text-text-main dark:text-white transition-colors duration-300">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-text-main dark:text-white transition-colors duration-300">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
