import { Facebook, Instagram, Twitter } from 'lucide-react';
import logoImg from '../assets/triple_charm_logo_1782321671631.jpg.png';

export function Footer() {
  return (
    <footer className="bg-text-main dark:bg-black text-white pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img src={logoImg} alt="Triple Charm Logo" className="h-16 w-16 object-contain rounded-full" />
              <h2 className="font-heading text-3xl font-bold tracking-widest">
                TRIPLE CHARM
              </h2>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 font-body">
              Three Sisters, One Vision. Premium women's fashion brand offering trendy clothing and essentials.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/triplecharm.brt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/triplecharm.brt/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@triple.charm.cloth" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                {/* Custom TikTok Icon SVG path or simple fallback */}
                <svg viewBox="0 0 24 24" fill="currentColor" height="18" width="18">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#collections" className="hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Policies</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 TRIPLE CHARM CLOTHING.</p>
          <p className="mt-4 md:mt-0">Designed By A.D.</p>
        </div>
      </div>
    </footer>
  );
}
