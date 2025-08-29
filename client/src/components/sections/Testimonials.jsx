import React from 'react';
import { User } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { Card } from '../ui/Card';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Testimonials= () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-6 text-center">
        <RevealWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What Our Students Say
          </h2>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealWrapper key={testimonial.id} delay={100 * (index + 1)}>
              <Card>
                <div className={`w-20 h-20 rounded-full ${testimonial.avatarBg} mx-auto mb-6 flex items-center justify-center ${testimonial.iconColor}`}>
                  <User className="w-10 h-10" />
                </div>
                <p className="italic text-gray-700 mb-6">
                  "{testimonial.message}"
                </p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.name}, {testimonial.role}
                </p>
              </Card>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};