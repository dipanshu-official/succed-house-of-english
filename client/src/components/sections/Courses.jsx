import React from 'react';
import { courses } from '../../data/courses';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { RevealWrapper } from '../ui/RevealWrapper';
import { CheckCircle } from 'lucide-react';
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
    <section id="courses" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <RevealWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Our Comprehensive English Courses
          </h2>
        </RevealWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <RevealWrapper key={course.id} delay={100 * (index + 1)}>
              <div className={`bg-white p-8 rounded-xl shadow-lg border ${course.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                <div className={`${course.iconBg} p-4 rounded-full inline-block mb-6`}>
                  {getIcon(course.icon)}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <ul className="text-left text-gray-700 space-y-2 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={scrollToContact} className="w-full">
                  {course.buttonText}
                </Button>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};