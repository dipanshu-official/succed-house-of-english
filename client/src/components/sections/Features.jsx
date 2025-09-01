import React from 'react';
import { BookCheck, BarChart2, Smile, CalendarCheck, Puzzle, Award, BookOpen } from 'lucide-react';
import { Card } from '../ui/Card';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Features = () => {
  const features = [
    {
      icon: BookCheck,
      title: 'Certified Expert Instructors',
      description: 'Learn from highly qualified and passionate teachers dedicated to your success.',
      bgColor: 'bg-orange-500',
      delay: 100
    },
    {
      icon: BarChart2,
      title: 'Proven Curriculum & Results',
      description: 'Our structured programs are designed for effective learning and measurable progress.',
      bgColor: 'bg-green-600',
      delay: 200
    },
    {
      icon: Smile,
      title: 'Supportive Community',
      description: 'Practice and grow with peers in a friendly and encouraging environment.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-500',
      delay: 300
    },
    {
      icon: CalendarCheck,
      title: 'Flexible Learning Options',
      description: 'Choose from in-person, online, or hybrid classes to fit your schedule.',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      delay: 400
    },
    {
      icon: Puzzle,
      title: 'Engaging & Interactive Lessons',
      description: 'Experience dynamic lessons that make learning enjoyable and effective.',
      bgColor: 'bg-blue-900',
      delay: 500
    },
    {
      icon: Award,
      title: 'Pathway to Certification',
      description: 'Prepare for internationally recognized English proficiency exams with confidence.',
      bgColor: 'bg-orange-500',
      delay: 600
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-40 h-40 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <RevealWrapper>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">Our Advantages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Why Choose SUCCEED HOUSE OF ENGLISH?
              </span>
            </h2>
          </div>
        </RevealWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <RevealWrapper key={index} delay={feature.delay}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 lg:p-8 border border-white/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl group">
                <div className={`${feature.bgColor} p-4 rounded-full inline-block mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className={`w-6 sm:w-8 h-6 sm:h-8 ${feature.iconColor || 'text-white'}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Decorative Element */}
                <div className="mt-6 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};