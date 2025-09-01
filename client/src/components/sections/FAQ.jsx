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
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-3xl">
        <RevealWrapper>
          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full mb-4">
              <span className="font-semibold">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </div>
        </RevealWrapper>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <RevealWrapper key={faq.id} delay={100 * (index + 1)}>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-6 transition-all duration-300 hover:shadow-xl group">
                <div
                  className="flex justify-between items-center cursor-pointer hover:text-cyan-600 transition-colors duration-300"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span className="font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">{faq.question}</span>
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-300 text-cyan-500 ${
                      openAccordion === faq.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openAccordion === faq.id 
                      ? 'max-h-48 pt-4' 
                      : 'max-h-0'
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};