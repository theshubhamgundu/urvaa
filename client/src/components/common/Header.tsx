import React from 'react';
import { FaBox, FaHome, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';

const promoOffers = [
  '🌾 URVA — Delivering the Authentic Rural Aura',
  '🌱 Discover regional products, makers, and traditions',
  '🧵 Explore foods, handlooms, plants, and thoughtful everyday goods',
  '🛍️ One Village – One Product',
];

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const linkClass = "flex flex-col items-center gap-1 text-[#5C2333] hover:text-[#c4633c] transition duration-300";

  return (
    <>
      {/* ─── Top Offer & Promo Announcement Marquee Bar ─── */}
      <div className="w-full bg-[#5C2333] text-white font-medium text-xs py-2 px-4 overflow-hidden relative z-50 border-b border-[#C79A56]/30">
        <div className="relative w-full flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[...promoOffers, ...promoOffers].map((offer, idx) => (
              <span key={idx} className="flex items-center gap-2 tracking-wide font-sans">
                <span>{offer}</span>
                <span className="text-primaryDark/40 ml-6">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <header className="bg-white/95 text-[#5C2333] border-b border-[#efe9db] shadow-sm p-3.5 px-4 md:px-12 relative z-40 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="URVA — Delivering the Authentic Rural Aura" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
              <span className="hidden flex-col text-[#234331] md:flex">
                <span className="text-lg font-serif font-bold tracking-wide md:text-2xl">URVA</span>
                <span className="hidden text-[9px] font-medium uppercase tracking-[0.12em] md:block">Delivering the Authentic Rural Aura</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={linkClass}>
              <FaHome />
              <span className="text-xs font-sans">Home</span>
            </Link>



            <Link to="/products" className={linkClass}>
              <FaBox />
              <span className="text-xs">Products</span>
            </Link>

            <Link to="/cart" className={`${linkClass} relative`}>
              <FaShoppingCart />
              <span className="text-xs">Basket</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2.5 font-bold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center bg-[#c4633c] text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Quick Action Buttons */}
          <div className="md:hidden flex items-center gap-4">


            <Link to="/cart" className="text-[#5C2333] hover:text-[#c4633c] transition-colors p-1 relative" aria-label="Basket">
              <FaShoppingCart className="text-lg" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs bg-[#c4633c] text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
