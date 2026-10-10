import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative w-full overflow-hidden bg-[#2A1C22] bg-cover bg-center font-sans text-[#FBF6ED]"
      style={{ backgroundImage: "url('/images/hero/golden-harvest-village.jpg')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#182219]/80" aria-hidden="true" />
      {/* Glow Effects */}
      <div className="pointer-events-none absolute right-1/3 top-0 h-80 w-80 rounded-full bg-[#C79A56]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-96 w-96 rounded-full bg-[#5C2333]/25 blur-3xl" />

      {/* ─── Main Footer Content Grid ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10 border-t border-white/10">
        {/* Column 1: Brand & Social (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <Link to="/" className="inline-block">
            <div className="w-24 h-24 bg-[#FBF6ED] p-2 shadow-xl border-2 border-[#C79A56] flex items-center justify-center overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src="/logo.png" alt="URVAA — Delivering the Authentic Rural Aura" className="w-full h-full object-contain" />
            </div>
          </Link>

          <div>
            <h4 className="text-xl font-serif font-bold text-white">URVAA</h4>
            <p className="text-xs text-[#F4EADA]/80 mt-2 leading-relaxed font-light">
              Delivering the Authentic Rural Aura. Discover regional products and the stories, skills, and traditions behind them.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917304888197"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white text-lg transition-all duration-300 hover:scale-110 shadow-md"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Column 2 & 3 Wrapper for Mobile 2-column layout */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-6">
          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-sm sm:text-base pb-2 underline decoration-wavy decoration-[#C79A56]/50 underline-offset-8">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#F4EADA]/80 font-medium">
              <li><Link to="/" className="hover:text-[#C79A56] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#C79A56] transition-colors">Our Story</Link></li>
              <li><Link to="/products" className="hover:text-[#C79A56] transition-colors">Explore Products</Link></li>
              <li><Link to="/cart" className="hover:text-[#C79A56] transition-colors">My Rural Basket</Link></li>
            </ul>
          </div>

          {/* Customer Care & Policies Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-white text-sm sm:text-base pb-2 underline decoration-wavy decoration-[#C79A56]/50 underline-offset-8">
              Customer Care & Policies
            </h4>
            <ul className="space-y-2 text-xs text-[#F4EADA]/80 font-medium">
              <li><Link to="/terms" className="hover:text-[#C79A56] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-[#C79A56] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-[#C79A56] transition-colors">Shipping & Delivery Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-[#C79A56] transition-colors">Refund & Returns Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Column 4: Contact */}
        <div className="lg:col-span-3 space-y-4 text-xs text-[#F4EADA]/80">
          <h4 className="font-serif font-bold text-white text-base pb-2 underline decoration-wavy decoration-[#C79A56]/50 underline-offset-8">
            Get in Touch
          </h4>

          <div className="flex items-start gap-3">
            <FaPhone className="text-[#C79A56] text-sm mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C79A56] block">Phone & WhatsApp:</span>
              <a href="tel:+917304888197" className="hover:text-white transition-colors font-medium">+91 73048 88197</a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-[#C79A56] text-sm mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C79A56] block">Customer support:</span>
              <a href="mailto:pranita311096@gmail.com" className="hover:text-white transition-colors font-medium">pranita311096@gmail.com</a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaLocationDot className="text-[#C79A56] text-sm mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C79A56] block">Our focus:</span>
              <p className="leading-relaxed font-light text-[11px] mt-0.5">
                Regional products and rural stories from across India.
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
