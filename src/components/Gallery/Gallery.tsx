import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "/assets/slika1mala.jpg",
    fullSrc: "/assets/slika1.jpg",
    caption: "Šlep vozilo u akciji - Novi Sad"
  },
  {
    id: 2,
    src: "/assets/slika2mala.jpg",
    fullSrc: "/assets/slika2.jpg",
    caption: "Transport automobila - autoput E75"
  },
  {
    id: 3,
    src: "/assets/slika3mala.jpg",
    fullSrc: "/assets/slika3.jpg",
    caption: "Bezbedan prevoz motocikla"
  },
  {
    id: 4,
    src: "/assets/slika4mala.jpg",
    fullSrc: "/assets/slika4.jpg",
    caption: "Nešto drugacije"
  },
  {
    id: 5,
    src: "/assets/slika5mala.jpg",
    fullSrc: "/assets/slika5.jpg",
    caption: "Međunarodni transport - Nemačka"
  },
  {
    id: 6,
    src: "/assets/slika6mala.jpg",
    fullSrc: "/assets/slika6.jpg",
    caption: "Prevoz paletene robe"
  }
];

export const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    if (!galleryImages[index].src) return; // Don't open lightbox for empty images
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-blue-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Naši Radovi</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Pogledajte kako profesionalno obavljamo posao
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-white/20 cursor-pointer hover:border-accent transition-all duration-300 shadow-lg"
              onClick={() => openLightbox(index)}
            >
              {image.src ? (
                <img 
                  src={image.src} 
                  alt={image.caption}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-white/5 flex flex-col items-center justify-center border-2 border-dashed border-white/10 group-hover:border-accent/50 transition-colors">
                  <span className="text-white/30 font-medium mb-2">Prostor za sliku</span>
                  <span className="text-white/20 text-sm">800x600px</span>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <ZoomIn size={48} className="text-accent mb-3" />
                <p className="text-white font-medium text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-white mb-6 font-medium">Želite Sličan Servis?</p>
          <a 
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-red-900/40 hover:-translate-y-1"
          >
            Pozovite Za Detalje
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors p-2"
            onClick={closeLightbox}
          >
            <X size={40} />
          </button>

          <button 
            className="absolute left-4 md:left-8 text-white hover:text-accent transition-colors p-2 bg-black/50 rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[currentImageIndex].fullSrc} 
              alt={galleryImages[currentImageIndex].caption}
              className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4 text-center rounded-b-lg">
              <p className="text-white text-lg font-medium">{galleryImages[currentImageIndex].caption}</p>
              <p className="text-gray-400 text-sm mt-1">{currentImageIndex + 1} / {galleryImages.length}</p>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-8 text-white hover:text-accent transition-colors p-2 bg-black/50 rounded-full"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};
