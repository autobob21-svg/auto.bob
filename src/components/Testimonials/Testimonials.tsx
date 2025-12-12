import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "Ostao sam u kvaru na autoputu kod Beograda noću. Pozvao sam AUTO BOB i stigli su za 40 minuta! Brzo, profesionalno, fer cena. Vozilo mi prevezli kući u Novi Sad bez ijedne ogrebotine. Spasili su me. Topla preporuka!",
    author: "Marko P., Beograd",
    rating: 5
  },
  {
    id: 2,
    text: "Trebalo mi je da prevezem motocikl iz Novog Sada do Crne Gore. Ekipa AUTO BOB je sve organizovala savršeno - prevoz, dokumentacija, komunikacija na nivou. Motocikl stigao bez jedne grebalice. Sve prošlo glatko!",
    author: "Stefan D., Novi Sad",
    rating: 5
  },
  {
    id: 3,
    text: "Sudar usred noći, panika, ne znam koga da pozovem. Našao sam AUTO BOB na internetu preko Google pretrage, stigli su za pola sata i sve sredili profesionalno. Hvala vam od srca!",
    author: "Ana M., Sremski Karlovci",
    rating: 5
  },
  {
    id: 4,
    text: "Koristim njihove usluge već tri godine za transport oldtajmera. Uvek maksimalna briga, pažnja i profesionalizam. Nikad me nisu izneverili. Najbolji u poslu!",
    author: "Nemanja R., Novi Sad",
    rating: 5
  },
  {
    id: 5,
    text: "Pokvarilo mi se auto na putu za Beograd sa bebom u autu. Pozvao sam ih, stigli su brzo i pomogli mi da dođem bezbedno kući. Hvala vam što ste tu za nas!",
    author: "Jelena K., Veternik",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isMobile]);

  const nextSlide = () => {
    setActiveIndex((prev) => {
      const increment = isMobile ? 1 : 1;
      return (prev + increment) % reviews.length;
    });
  };

  const prevSlide = () => {
    setActiveIndex((prev) => {
      const decrement = isMobile ? 1 : 1;
      return (prev - decrement + reviews.length) % reviews.length;
    });
  };

  const getVisibleReviews = () => {
    if (isMobile) {
      return [reviews[activeIndex]];
    }
    
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(reviews[(activeIndex + i) % reviews.length]);
    }
    return items;
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-blue-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Šta Naši Klijenti Kažu</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Hiljade zadovoljnih vozača širom Srbije
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, idx) => (
              <div 
                key={`${review.id}-${idx}`}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 relative animate-fade-in"
              >
                <Quote size={40} className="text-accent mb-4 opacity-50" />
                <p className="text-gray-200 italic mb-6 min-h-[120px]">"{review.text}"</p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="font-bold text-white">{review.author}</div>
                  <div className="flex text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-hover transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent-hover transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-accent w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-lg text-white/80">
            <span className="font-bold text-white">500+</span> Zadovoljnih Klijenata | <span className="font-bold text-white">5.0 ★</span> Prosečna Ocena | <span className="font-bold text-white">98%</span> Preporuke
          </p>
        </div>
      </div>
    </section>
  );
};
