import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { siteInfo } from '../../data/mock/siteInfo';

const faqs = [
  {
    question: "💰 Koliko košta šlep služba?",
    answer: "Cena zavisi od udaljenosti (od-do lokacije), tipa vozila, vremena intervencije (dan/noć) i dodatnih usluga. Pozovite nas na 064 9125 567 za tačnu procenu - besplatno!"
  },
  {
    question: "⏰ Koliko brzo možete stići?",
    answer: "U Novom Sadu stižemo za 15-30 minuta. U okolini NS za 30-60 minuta. U ostatku Srbije zavisno od lokacije, obično istog dana. Za hitne slučajeve maksimalno ubrzavamo intervenciju!"
  },
  {
    question: "🚗 Koja vozila možete prevesti?",
    answer: "Prevozimo sva vozila do 2.2 tone: putničke automobile, motocikle i skutere, kvadove (ATV/UTV), laka teretna vozila, oldtajmere i retka vozila. Ako niste sigurni, pozovite - verovatno možemo!"
  },
  {
    question: "🌍 Da li radite međunarodni prevoz?",
    answer: "Da! Transportujemo vozila u Hrvatsku, BiH, Crnu Goru, ostale EU zemlje i iz inostranstva u Srbiju. Brinemo o svoj potrebnoj dokumentaciji i carini."
  },
  {
    question: "💳 Kako se plaća usluga?",
    answer: "Prihvatamo gotovinu, kartice (na licu mesta) i virman (faktura za firme). Plaćanje se vrši po dolasku ili po završetku usluge."
  },
  {
    question: "🛡️ Da li ste osigurani?",
    answer: "Da, posedujemo potpuno osiguranje vozila, osiguranje odgovornosti i sertifikate za transport vozila. Vaše vozilo je u bezbednim rukama!"
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-black text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">Često Postavljana Pitanja</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Brzi odgovori na najčešća pitanja
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/50 bg-white/5 backdrop-blur-sm"
            >
              <button
                className={`w-full flex items-center justify-between p-6 text-left font-bold text-lg transition-colors duration-300 ${
                  openIndex === index ? 'bg-accent/10 text-accent' : 'text-white hover:bg-white/5'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  size={24} 
                  className={`text-accent transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 mb-6 font-medium">Imate Još Pitanja?</p>
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
