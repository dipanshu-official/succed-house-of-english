import React from 'react';
import { courses } from '../../data/courses';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { RevealWrapper } from '../ui/RevealWrapper';
import { CheckCircle, BookOpen } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export const Courses = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8 text-white" /> : null;
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50">
      
      <div className="container mx-auto px-6 text-center">
        <RevealWrapper>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">Course Catalog</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">
                Our Comprehensive English Courses
              </span>
            </h2>
          </div>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <RevealWrapper key={course.id} delay={100 * (index + 1)}>
              <div className={`bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border-2 ${course.borderColor} transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl group relative overflow-hidden`}>
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`${course.iconBg} p-4 rounded-full inline-block mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                  {getIcon(course.icon)}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-violet-600 transition-colors duration-300 relative z-10">{course.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed relative z-10">{course.description}</p>
                <ul className="text-left text-gray-700 space-y-3 mb-8 relative z-10">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact} 
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all duration-300 relative z-10"
                >
                  {course.buttonText}
                </Button>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-200/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};