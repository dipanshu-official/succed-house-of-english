import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Teachers = () => {
  const teachers = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialization: 'IELTS & Academic English',
      experience: '12 Years',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      name: 'Michael Chen',
      specialization: 'Business English',
      experience: '8 Years',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      specialization: 'Conversation & Speaking',
      experience: '10 Years',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '4',
      name: 'James Wilson',
      specialization: 'TOEFL & Test Prep',
      experience: '15 Years',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      name: 'Dr. Priya Patel',
      specialization: 'Grammar & Writing',
      experience: '11 Years',
      image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      name: 'Robert Thompson',
      specialization: 'General English',
      experience: '9 Years',
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-5 h-5" />
            <span className="font-semibold">Our Teachers</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Expert Faculty
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from experienced educators dedicated to helping you achieve your English language goals.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <div className="relative mb-4">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {teacher.experience}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {teacher.name}
              </h3>
              <p className="text-blue-600 font-medium">
                {teacher.specialization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};