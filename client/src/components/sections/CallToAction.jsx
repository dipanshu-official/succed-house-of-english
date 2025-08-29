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
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 to-green-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Start Your English Journey?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join thousands of successful students who have achieved their language goals with SUCCEED HOUSE OF ENGLISH.
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          onClick={scrollToContact}
          className="transform hover:scale-105"
        >
          Enroll Today!
        </Button>
      </div>
    </section>
  );
};