import React from 'react';
import { Car, Bike, Truck, Bus } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    icon: <Car size={56} />,
    title: "AUTOMOBILI",
    description: "Putnička vozila svih marki i modela"
  },
  {
    id: 2,
    icon: <Bike size={56} />,
    title: "MOTOCIKLI",
    description: "Dvotočkaši, tricikli, skuteri"
  },
  {
    id: 3,
    icon: <Truck size={56} />,
    title: "KVADOVI (ATV)",
    description: "Terenski kvadovi i UTV vozila"
  },
  {
    id: 4,
    icon: <Bus size={56} />,
    title: "TERETNA VOZILA",
    description: "Kombi i laka teretna do 2.2t"
  }
];

export const Vehicles: React.FC = () => {
  return (
    <section id="vehicles" className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Koja Vozila Prevozimo?</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Sve do 2.2 tone - bezbedno i profesionalno
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="group bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 hover:border-accent hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="mb-6 text-white group-hover:text-accent transition-colors duration-300 inline-block transform group-hover:scale-110">
                {vehicle.icon}
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-3 text-white">
                {vehicle.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-white transition-colors">
                {vehicle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80 italic mb-8">
            "Niste sigurni da li možemo prevesti vaše vozilo? Pozovite nas - rešavamo i nestandardne situacije!"
          </p>
          <a 
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-red-900/40 hover:-translate-y-1"
          >
            Pozovite Za Procenu
          </a>
        </div>
      </div>
    </section>
  );
};
