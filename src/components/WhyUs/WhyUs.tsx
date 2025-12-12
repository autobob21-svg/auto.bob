import React from 'react';
import { Zap, Shield, Wallet, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Zap size={40} />,
    title: "BRZA INTERVENCIJA",
    description: "Stižemo u najkraćem mogućem roku. U Novom Sadu 15-30 minuta, u okolini do 1 sata, u Srbiji istog ili narednog dana."
  },
  {
    icon: <Shield size={40} />,
    title: "BEZBEDNO I POUZDANO",
    description: "Najsavremenija oprema za utovar, iskusni i obučeni vozači, potpuno osiguran prevoz svakog vozila."
  },
  {
    icon: <Wallet size={40} />,
    title: "FER CENE",
    description: "Transparentne cene bez skrivenih troškova. Pozovite za besplatnu procenu - dobijate tačnu cenu pre početka."
  },
  {
    icon: <Clock size={40} />,
    title: "24/7 DOSTUPNOST",
    description: "Dostupni non-stop, svakog dana u godini - vikendima, praznicima, usred noći. Uvek tu kada vam trebamo."
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-blue-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-red-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">Zašto AUTO BOB?</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Vaš najpouzdaniji partner na putu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-accent hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-md group-hover:text-gray-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-16">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
            <div className="text-gray-400 font-medium uppercase tracking-wide">Godina Iskustva</div>
          </div>
          <div className="p-4 border-l-0 md:border-l border-white/10">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">5000+</div>
            <div className="text-gray-400 font-medium uppercase tracking-wide">Prevezenih Vozila</div>
          </div>
          <div className="p-4 border-l-0 md:border-l border-white/10">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
            <div className="text-gray-400 font-medium uppercase tracking-wide">Zadovoljnih Klijenata</div>
          </div>
        </div>
      </div>
    </section>
  );
};
