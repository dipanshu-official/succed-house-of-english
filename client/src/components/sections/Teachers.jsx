import React from 'react';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Teachers = () => {
  const teachers = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      name: 'James Wilson',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      name: 'Dr. Priya Patel',
      image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      name: 'Robert Thompson',
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="teachers" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <RevealWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Teachers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from passionate educators who are dedicated to helping you achieve your English language goals.
            </p>
          </div>
        </RevealWrapper>

        {/* Teachers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {teachers.map((teacher, index) => (
            <RevealWrapper key={teacher.id} delay={100 * (index + 1)}>
              <div className="text-center group">
                <div className="relative overflow-hidden rounded-full shadow-lg mb-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-32 h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};