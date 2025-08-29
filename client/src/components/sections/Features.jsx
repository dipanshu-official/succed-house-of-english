import React from 'react';
import { BookCheck, BarChart2, Smile, CalendarCheck, Puzzle, Award } from 'lucide-react';
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
    <section id="features" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-6 text-center">
        <RevealWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Why Choose SUCCEED HOUSE OF ENGLISH?
          </h2>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <RevealWrapper key={index} delay={feature.delay}>
              <Card>
                <div className={`${feature.bgColor} p-4 rounded-full inline-block mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor || 'text-white'}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};