import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { siteInfo, navItems } from '../../data/mock/siteInfo';
import logo from '../../assets/logo.png';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="block">
          <img 
            src={logo}
            alt="Logo" 
            className="w-40 h-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white font-medium hover:text-accent transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          
          <a 
            href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-red-900/30 animate-pulse-slow"
          >
            <Phone size={18} className="fill-current" />
            <span>{siteInfo.contact.phoneDisplay}</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* POZOVI ODMAH dugme */}
      <a 
      href='tel:+381649125567'
      className='fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-full shadow-lg transition'
      >
        POZOVI ODMAH
      </a>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', paddingTop: '80px' }}
      >
        <div className="flex flex-col items-center space-y-8 p-8 h-full">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white text-2xl font-heading font-bold hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          <a 
            href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`}
            className="mt-8 flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg shadow-red-900/20 w-full justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone size={24} className="fill-current" />
            <span>{siteInfo.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
