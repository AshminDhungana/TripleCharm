import { motion } from 'motion/react';
import { Sparkles, Gem, Scissors, Headset, Lock, Heart } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Trendy Styles', desc: 'Always ahead of the curve with the latest fashion trends.' },
  { icon: Gem, title: 'Affordable Luxury', desc: 'Premium look and feel without the extravagant price tag.' },
  { icon: Scissors, title: 'Quality Materials', desc: 'Carefully selected fabrics that look beautiful and last.' },
  { icon: Headset, title: 'Fast Customer Support', desc: 'We are here to help you with any questions or concerns.' },
  { icon: Lock, title: 'Secure Shopping', desc: 'Safe and encrypted payment processing for your peace of mind.' },
  { icon: Heart, title: 'Customer Satisfaction', desc: 'Your happiness and confidence are our top priorities.' },
];

export function Features() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-text-main dark:text-white mb-4 transition-colors duration-300"
          >
            Why Shop With Us
          </motion.h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-secondary/30 dark:bg-gray-800/50 hover:bg-secondary/60 dark:hover:bg-gray-800 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 shadow-sm text-rosegold group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-main dark:text-white mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm transition-colors duration-300">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
