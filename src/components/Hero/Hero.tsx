import React from 'react';
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { siteInfo } from '../../data/mock/siteInfo';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-gradient">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Road Lines Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-3 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Badge */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-white/90 text-sm md:text-base font-medium tracking-wide">
              Novi Sad • Cela Srbija • Inostranstvo
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Ostali Ste u <span className="text-accent">Nevolji</span> na Putu?
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-200 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            {siteInfo.tagline} - Brza Intervencija Širom Srbije
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {[
              { icon: <Clock size={20} />, text: "24/7 DOSTUPNI" },
              { icon: <CheckCircle size={20} />, text: "DO 2.2 TONE" },
              { icon: <MapPin size={20} />, text: "CELA SRBIJA" },
              { icon: <CheckCircle size={20} />, text: "10+ GODINA" },
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90 font-semibold bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="text-accent">{badge.icon}</span>
                <span className="text-sm md:text-base">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`}
              className="group relative w-full md:w-auto min-w-[300px] h-[70px] bg-accent hover:bg-accent-hover text-white rounded-xl flex items-center justify-center gap-4 transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Phone size={28} className="fill-current animate-pulse" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-sm font-medium opacity-90">POZOVITE ODMAH</span>
                <span className="text-2xl font-bold tracking-wider">{siteInfo.contact.phoneDisplay}</span>
              </div>
            </a>

            <a 
              href={`mailto:${siteInfo.contact.email}`}
              className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
            >
              <span>✉️ Pošaljite Email Upit</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow text-white/70 flex flex-col items-center gap-2 cursor-pointer" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-sm font-medium uppercase tracking-widest">Saznajte Više</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};
