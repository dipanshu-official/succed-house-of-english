import React from 'react';
import { User } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { Card } from '../ui/Card';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Testimonials= () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-16 right-16 w-36 h-36 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-44 h-44 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <RevealWrapper>
          <div className="mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-2 rounded-full mb-4">
              <span className="font-semibold">Student Voices</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                What Our Students Say
              </span>
            </h2>
          </div>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealWrapper key={testimonial.id} delay={100 * (index + 1)}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 lg:p-8 border border-white/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl group relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-full ${testimonial.avatarBg} mx-auto mb-6 flex items-center justify-center ${testimonial.iconColor} transform group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                  <User className="w-8 sm:w-10 h-8 sm:h-10" />
                </div>
                <p className="italic text-sm sm:text-base text-gray-700 mb-6 leading-relaxed relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                  "{testimonial.message}"
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-300 relative z-10">
                  - {testimonial.name}, {testimonial.role}
                </p>
                
                {/* Quote Decoration */}
                <div className="absolute top-4 right-4 text-6xl text-rose-200/30 font-serif">"</div>
                <div className="absolute bottom-4 left-4 text-6xl text-pink-200/30 font-serif rotate-180">"</div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};