import React from 'react';
import { Users, GraduationCap, Globe, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { RevealWrapper } from '../ui/RevealWrapper';

export const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <RevealWrapper>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Our Vision: Bridging Worlds Through Language
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              SUCCEED HOUSE OF ENGLISH is more than just a language school; it's a vibrant community where aspiring English speakers transform into confident communicators. We believe that mastering English opens doors to global opportunities, fosters cross-cultural understanding, and empowers individuals to achieve their fullest potential.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our dedicated team of experienced instructors uses innovative teaching methods, personalized attention, and a supportive learning environment to ensure every student not only learns the language but truly lives it. Join us and embark on your journey to fluency!
            </p>
            <Button variant="secondary" onClick={scrollToContact}>
              Meet Our Team
            </Button>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-100 h-64 rounded-xl shadow-md flex items-center justify-center text-gray-600 font-semibold border-2 border-gray-200 flex-col">
              <Users className="w-12 h-12 text-gray-500 mb-2" />
              <span>Happy Students</span>
            </div>
            <div className="bg-green-600 h-64 rounded-xl shadow-md flex items-center justify-center text-white font-semibold border-2 border-green-700 flex-col">
              <GraduationCap className="w-12 h-12 text-white mb-2" />
              <span>Modern Classroom</span>
            </div>
            <div className="bg-orange-500 h-64 rounded-xl shadow-md flex items-center justify-center text-white font-semibold border-2 border-orange-700 flex-col">
              <Globe className="w-12 h-12 text-white mb-2" />
              <span>Global Community</span>
            </div>
            <div className="bg-white h-64 rounded-xl shadow-md flex items-center justify-center text-blue-900 font-semibold border-2 border-gray-200 flex-col">
              <Heart className="w-12 h-12 text-blue-900 mb-2" />
              <span>Supportive Environment</span>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};