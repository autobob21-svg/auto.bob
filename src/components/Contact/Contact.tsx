import React from 'react';
import { Phone, Mail, MapPin, Instagram, ExternalLink, Send } from 'lucide-react';
import { siteInfo, navItems } from '../../data/mock/siteInfo'; 
import logo from '../../assets/logo.png';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-20 md:pt-28 pb-10 border-t border-white/10">
      {/* Final CTA Banner */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="bg-accent rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-[0_0_60px_rgba(220,38,38,0.3)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">Treba Vam Pomoć Na Putu?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">Pozovite Nas Odmah - Dolazimo u Najkraćem Roku!</p>
            
            <a 
              href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`}
              className="block text-4xl md:text-6xl font-bold text-white mb-10 hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            >
              {siteInfo.contact.phoneDisplay}
            </a>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`}
                className="w-full md:w-auto min-w-[240px] bg-black text-white px-8 py-5 rounded-xl text-xl font-bold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Phone size={24} className="fill-white animate-pulse" />
                Pozovite Odmah
              </a>
              
              <a 
                href={`mailto:${siteInfo.contact.email}`}
                className="w-full md:w-auto min-w-[240px] bg-white text-accent px-8 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Mail size={24} />
                Pošaljite Email
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-white/80">
              <span className="flex items-center gap-2"><span className="text-white">✅</span> Dostupni 24/7</span>
              <span className="flex items-center gap-2"><span className="text-white">✅</span> Brza Intervencija</span>
              <span className="flex items-center gap-2"><span className="text-white">✅</span> 10+ Godina Iskustva</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Kontaktirajte Nas</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Tu smo da vam pomognemo - 24 sata, 7 dana u nedelji
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-20">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">TELEFON</h3>
                <a href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`} className="text-2xl md:text-3xl font-bold text-white hover:text-accent transition-colors block mb-1">
                  {siteInfo.contact.phoneDisplay}
                </a>
                <p className="text-gray-400">Dostupni Non-Stop • 24/7/365</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">EMAIL</h3>
                <a href={`mailto:${siteInfo.contact.email}`} className="text-xl md:text-2xl font-bold text-white hover:text-accent transition-colors block mb-1">
                  {siteInfo.contact.email}
                </a>
                <p className="text-gray-400">Odgovaramo u roku od 1h</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">ADRESA</h3>
                <p className="text-xl md:text-2xl font-bold text-white mb-4">
                  {siteInfo.contact.address.split(',')[0]}<br/>
                  {siteInfo.contact.address.split(',')[1]}
                </p>
                <a 
                  href={siteInfo.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-bold"
                >
                  Otvori u Google Maps <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <a 
                href={siteInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Instagram size={24} />
                </div>
                <span className="text-xl font-bold">{siteInfo.social.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Pošaljite Upit</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Ime i Prezime</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Vaše ime"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Vaš broj telefona"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Vaša email adresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-400 mb-2">Lokacija</label>
                <input 
                  type="text" 
                  id="location"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Gde se trenutno nalazite?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Poruka</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Opišite problem..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-1"
              >
                <Send size={20} />
                Pošaljite Upit
              </button>
              
              <p className="text-center text-gray-500 text-sm italic">
                Ili nas jednostavno pozovite - najbrži način da dobijete pomoć!
              </p>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <a href="#" className="block mb-4">
                <img 
                  src={logo}
                  alt="logo" 
                  className="w-80 h-auto"
                />
              </a>
              <p className="text-gray-400 max-w-xs">
                {siteInfo.tagline}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Brzi Linkovi</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-gray-400 hover:text-accent transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Radno Vreme</h4>
              <div className="text-gray-400 space-y-2">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Dostupni 24/7
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Non-Stop Servis
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Vikendi i Praznici
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} AUTO BOB. Sva prava zadržana.</p>
            <p>Novi Sad, Srbija</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
