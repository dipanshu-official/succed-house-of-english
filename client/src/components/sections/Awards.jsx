import React from 'react';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Awards = () => {
  const students = [
    {
      id: '1',
      name: 'Sarah Johnson',
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
      name: 'Priya Patel',
      image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      name: 'Robert Thompson',
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '7',
      name: 'Lisa Anderson',
      image: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '8',
      name: 'David Kim',
      image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="awards" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <RevealWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Students
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet some of our successful students who have achieved their English learning goals.
            </p>
          </div>
        </RevealWrapper>

        {/* Students Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {students.map((student, index) => (
            <RevealWrapper key={student.id} delay={100 * (index + 1)}>
              <div className="text-center group">
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};