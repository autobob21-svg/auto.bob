import React from 'react';
import { Car, Bike, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Car size={64} />,
    title: "ŠLEP SLUŽBA 24/7",
    description: "Brza pomoć na putu za sva vozila do 2.2 tone. Pokvareno vozilo? Sudar? Nestanak struje? Pozovite nas - stižemo!",
    features: ["Automobili", "Teretna vozila (do 2.2t)", "Hitne intervencije", "Non-stop dostupnost"],
    cta: "Pozovite Za Šlep"
  },
  {
    id: 2,
    icon: <Bike size={64} />,
    title: "TRANSPORT SPECIJALNIH VOZILA",
    description: "Profesionalan transport motocikala, kvadova i drugih specijalnih vozila sa maksimalnom brigom.",
    features: ["Motocikli", "Kvadovi (ATV)", "Oldtajmeri", "Luksuzna vozila"],
    cta: "Zakažite Transport"
  },
  {
    id: 3,
    icon: <Globe size={64} />,
    title: "MEĐUNARODNI PREVOZ",
    description: "Transportujemo vozila iz Srbije u inostranstvo i obrnuto. Brzo, bezbedno, sa kompletnom dokumentacijom.",
    features: ["Hrvatska, BiH, Crna Gora", "Ostale EU zemlje", "Carinska dokumentacija", "Osiguran prevoz"],
    cta: "Upit Za Inostranstvo"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">Naše Usluge</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Kompletan spektar šlep službi za sve vrste vozila
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 hover:border-accent hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-red-900/20 flex flex-col h-full"
            >
              <div className="mb-6 text-blue-400 group-hover:text-accent transition-colors duration-300 transform group-hover:scale-110 origin-left">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-primary hover:bg-accent text-white rounded-xl font-bold transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
                {service.cta}
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
