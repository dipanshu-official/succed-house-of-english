import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Features } from './components/sections/Features';
import { Gallery } from './components/sections/Gallery';
import { Courses } from './components/sections/Courses';
import { Testimonials } from './components/sections/Testimonials';
import { CallToAction } from './components/sections/CallToAction';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Features />
        <Gallery />
        <Courses />
        <Testimonials />
        <CallToAction />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;