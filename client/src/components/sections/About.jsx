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
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <RevealWrapper>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Our Vision: <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">Bridging Worlds Through Language</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              SUCCEED HOUSE OF ENGLISH is more than just a language school; it's a vibrant community where aspiring English speakers transform into confident communicators. We believe that mastering English opens doors to global opportunities, fosters cross-cultural understanding, and empowers individuals to achieve their fullest potential.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our dedicated team of experienced instructors uses innovative teaching methods, personalized attention, and a supportive learning environment to ensure every student not only learns the language but truly lives it. Join us and embark on your journey to fluency!
            </p>
            <Button 
              variant="secondary" 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange-500 to-green-500 text-white border-0 hover:from-orange-600 hover:to-green-600 shadow-lg transform hover:scale-105"
            >
              Meet Our Team
            </Button>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={200}>
          <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 h-64 rounded-xl shadow-lg flex items-center justify-center text-orange-700 font-semibold border-2 border-orange-300 flex-col transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Successful Students</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 h-64 rounded-xl shadow-lg flex items-center justify-center text-white font-semibold border-2 border-green-700 flex-col transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Pass Rate</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 rounded-xl shadow-lg flex items-center justify-center text-white font-semibold border-2 border-blue-700 flex-col transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Countries</div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-64 rounded-xl shadow-lg flex items-center justify-center text-purple-700 font-semibold border-2 border-purple-300 flex-col transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-sm sm:text-base text-gray-700 font-medium">Years Experience</div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};