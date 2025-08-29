import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { faqs } from '../../data/faqs';
import { RevealWrapper } from '../ui/RevealWrapper';

export const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <RevealWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
        </RevealWrapper>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <RevealWrapper key={faq.id} delay={100 * (index + 1)}>
              <div className="border-b border-gray-200">
                <div
                  className="flex justify-between items-center py-4 cursor-pointer hover:text-gray-900 transition-colors duration-300"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span className="font-medium text-gray-700">{faq.question}</span>
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openAccordion === faq.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openAccordion === faq.id 
                      ? 'max-h-48 pb-4' 
                      : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 pt-4">{faq.answer}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};