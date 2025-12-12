import React from 'react';
import { Phone, Clock, Car, CheckCircle } from 'lucide-react';
import { siteInfo } from '../../data/mock/siteInfo';

const steps = [
  {
    id: 1,
    icon: <Phone size={32} />,
    title: "POZOVITE",
    description: `Kontaktirajte nas na ${siteInfo.contact.phone}. Opišite problem i vašu trenutnu lokaciju.`
  },
  {
    id: 2,
    icon: <Clock size={32} />,
    title: "BRZA REAKCIJA",
    description: "Stižemo do vas u najkraćem roku - obično 20-40 minuta u NS, do 1h u okolini."
  },
  {
    id: 3,
    icon: <Car size={32} />,
    title: "PROFESIONALAN SERVIS",
    description: "Bezbedno utovaravamo vaše vozilo koristeći najsavremeniju opremu."
  },
  {
    id: 4,
    icon: <CheckCircle size={32} />,
    title: "SIGURAN TRANSPORT",
    description: "Prevozimo vaše vozilo do željene destinacije bez ikakvog oštećenja."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-hero-gradient text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Jednostavan Proces u 4 Koraka</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Brza i efikasna pomoć kada vam je najpotrebnija
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-dashed-white opacity-30 border-t-2 border-dashed border-white/30 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                {/* Number Badge */}
                <div className="w-20 h-20 rounded-full bg-accent text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-black/50">
                  {step.id}
                </div>
                
                {/* Icon */}
                <div className="mb-4 text-blue-200 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 font-heading">{step.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl text-white mb-6 font-medium">Treba Vam Pomoć Sada?</p>
          <a 
            href={`tel:${siteInfo.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-red-900/40 hover:-translate-y-1"
          >
            <Phone size={24} className="fill-current" />
            <span>Pozovite {siteInfo.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
