import React from 'react';
import { Button } from '../ui/Button';

export const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-orange-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
          Ready to Start Your English Journey?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 relative z-10">
          Join thousands of successful students who have achieved their language goals with SUCCEED HOUSE OF ENGLISH.
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          onClick={scrollToContact}
          className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-2xl relative z-10"
        >
          Enroll Today!
        </Button>
      </div>
    </section>
  );
};