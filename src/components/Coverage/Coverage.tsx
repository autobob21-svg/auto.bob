import React from 'react';
import { MapPin, Globe, Navigation } from 'lucide-react';
import { siteInfo } from '../../data/mock/siteInfo';

export const Coverage: React.FC = () => {
  return (
    <section id="coverage" className="py-20 md:py-28 bg-blue-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Gde Pružamo Usluge?</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Od Novog Sada do cele Srbije i inostranstva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Zone 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                <MapPin size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">NOVI SAD</h3>
              <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-6">NAŠA BAZA</span>
              
              <div className="space-y-4 text-gray-300">
                <p className="font-medium text-white">{siteInfo.contact.address}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="mb-2"><span className="text-accent font-bold">⚡</span> 15-30 minuta u gradu</p>
                  <p><span className="text-accent font-bold">⚡</span> Do 1h u okolini</p>
                </div>
              </div>
            </div>
          </div>

          {/* Zone 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                <Navigation size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">CELA SRBIJA</h3>
              
              <ul className="space-y-3 text-gray-300 text-left w-full max-w-[200px]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Beograd i okolina
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Vojvodina
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Centralna Srbija
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Južna Srbija
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Svi autoputevi
                </li>
              </ul>
            </div>
          </div>

          {/* Zone 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">INOSTRANSTVO</h3>
              
              <ul className="space-y-3 text-gray-300 text-left w-full max-w-[200px]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Hrvatska
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Bosna i Hercegovina
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Crna Gora
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Ostale EU zemlje
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Kompletna dokumentacija
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white mb-4">Pozovite za tačnu procenu vremena dolaska</p>
          <a 
            href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`}
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-red-900/40 hover:-translate-y-1"
          >
            {siteInfo.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};
