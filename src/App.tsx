import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Process } from './components/Process/Process';
import { Services } from './components/Services/Services';
import { Vehicles } from './components/Vehicles/Vehicles';
import { Coverage } from './components/Coverage/Coverage';
import { WhyUs } from './components/WhyUs/WhyUs';
import { Gallery } from './components/Gallery/Gallery';
import { Video } from './components/Video/Video';
import { Testimonials } from './components/Testimonials/Testimonials';
import { FAQ } from './components/FAQ/FAQ';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-text-dark overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Process />
        <Services />
        <Vehicles />
        <Coverage />
        <WhyUs />
        <Gallery />
        <Video />
        <Testimonials />
        <FAQ />
      </main>
      <Contact />
    </div>
  );
}

export default App;
