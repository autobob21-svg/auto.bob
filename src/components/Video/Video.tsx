import React from 'react';
import { Play } from 'lucide-react';
import { siteInfo } from '../../data/mock/siteInfo';

export const Video: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Pogledajte Kako Radimo</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Video prikaz naše šlep službe u akciji
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-accent shadow-[0_0_60px_rgba(220,38,38,0.2)] group cursor-pointer">
            {/* Placeholder for Video - In production this would be an iframe or video tag */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center border-2 border-dashed border-white/10">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center pl-2 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse mb-4">
                  <Play size={40} className="fill-white text-white" />
                </div>
                <span className="text-white/50 font-medium">Prostor za Video Cover</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Naš tim koristi najsavremeniju opremu i profesionalne tehnike za bezbedno utovaravanje i prevoz svih tipova vozila. Gledajte kako ozbiljno shvatamo vaše poverenje!
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-xl font-bold text-white">Želite Ovako Pouzdan Servis?</p>
              <a 
                href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`}
                className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-red-900/40 hover:-translate-y-1"
              >
                Pozovite Odmah: {siteInfo.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
