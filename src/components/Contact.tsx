import { motion } from 'motion/react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const whatsappLinks = [
  { phone: "+977 982-8784543", url: "https://wa.me/9779828784543", label: "Support Line 1" },
  { phone: "+977 982-4382248", url: "https://wa.me/9779824382248", label: "Support Line 2" },
  { phone: "+977 981-6382566", url: "https://wa.me/9779816382566", label: "Support Line 3" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-ivory dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-text-main dark:text-white mb-4 transition-colors duration-300"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300"
          >
            We'd love to hear from you. Reach out to us via WhatsApp or Email for inquiries, sizing help, or styling advice.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center transition-colors duration-300"
          >
            <div className="w-16 h-16 bg-[#25D366]/10 dark:bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
              <MessageCircle size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-heading font-semibold text-text-main dark:text-white mb-6 transition-colors duration-300">WhatsApp Us</h3>
            <div className="space-y-4 w-full">
              {whatsappLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:border-[#25D366] dark:hover:border-[#25D366] hover:bg-[#25D366]/5 dark:hover:bg-[#25D366]/10 transition-colors group"
                >
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-text-main dark:group-hover:text-white transition-colors duration-300">{link.label}</span>
                  <span className="text-sm font-semibold text-text-main dark:text-white group-hover:text-[#25D366] transition-colors duration-300">{link.phone}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center transition-colors duration-300"
          >
            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
              <Mail size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-heading font-semibold text-text-main dark:text-white mb-4 transition-colors duration-300">Email Us</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm transition-colors duration-300">For partnerships and general inquiries</p>
            <a 
              href="mailto:triplecharm.brt@gmail.com"
              className="text-lg font-medium text-text-main dark:text-white hover:text-primary dark:hover:text-primary transition-colors underline underline-offset-4"
            >
              triplecharm.brt@gmail.com
            </a>
          </motion.div>

          {/* Location / Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center transition-colors duration-300"
          >
            <div className="w-16 h-16 bg-secondary dark:bg-gray-800 text-rosegold rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
              <MapPin size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-heading font-semibold text-text-main dark:text-white mb-4 transition-colors duration-300">Shipping</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm transition-colors duration-300">We offer fast and reliable shipping. Contact us to verify delivery to your area.</p>
            <p className="text-sm font-medium text-rosegold">100% Satisfaction Guaranteed</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
