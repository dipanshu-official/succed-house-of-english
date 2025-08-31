import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Features } from '../components/sections/Features';
import { Gallery } from '../components/sections/Gallery';
import { Awards } from '../components/sections/Awards';
import { Teachers } from '../components/sections/Teachers';
import { Courses } from '../components/sections/Courses';
import { Testimonials } from '../components/sections/Testimonials';
import { CallToAction } from '../components/sections/CallToAction';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export const HomePage = () => {
  return (
    <main className="pt-20">
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Awards />
      <Teachers />
      <Courses />
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Contact />
    </main>
  );
};