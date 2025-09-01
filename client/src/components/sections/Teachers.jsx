import React, { useState } from 'react';
import { GraduationCap, Award, Globe, BookOpen } from 'lucide-react';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Teachers = () => {
  const [hoveredTeacher, setHoveredTeacher] = useState(null);

  const teachers = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialization: 'IELTS & Academic English',
      experience: '12 Years',
      qualification: 'PhD in Applied Linguistics',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['IELTS Preparation', 'Academic Writing', 'Research Methods']
    },
    {
      id: '2',
      name: 'Michael Chen',
      specialization: 'Business English',
      experience: '8 Years',
      qualification: 'TESOL Certified',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Corporate Training', 'Presentation Skills', 'Professional Communication']
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      specialization: 'Conversation & Speaking',
      experience: '10 Years',
      qualification: 'CELTA Certified',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Fluency Development', 'Pronunciation', 'Cultural Communication']
    },
    {
      id: '4',
      name: 'James Wilson',
      specialization: 'TOEFL & Test Prep',
      experience: '15 Years',
      qualification: 'MA in TESOL',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['TOEFL Preparation', 'Test Strategies', 'Academic Skills']
    },
    {
      id: '5',
      name: 'Dr. Priya Patel',
      specialization: 'Grammar & Writing',
      experience: '11 Years',
      qualification: 'PhD in English Literature',
      image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Advanced Grammar', 'Creative Writing', 'Literature Analysis']
    },
    {
      id: '6',
      name: 'Robert Thompson',
      specialization: 'General English',
      experience: '9 Years',
      qualification: 'DELTA Certified',
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Beginner to Advanced', 'Interactive Methods', 'Student Motivation']
    }
  ];

  return (
    <section id="teachers" className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-10 right-10 w-36 h-36 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-44 h-44 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <RevealWrapper>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">Expert Faculty</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Meet Our Expert Teachers
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Learn from passionate educators who are dedicated to helping you achieve your English language goals with proven expertise and innovative teaching methods.
            </p>
          </div>
        </RevealWrapper>

        {/* Teachers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {teachers.map((teacher, index) => (
            <RevealWrapper key={teacher.id} delay={100 * (index + 1)}>
              <div 
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredTeacher(teacher.id)}
                onMouseLeave={() => setHoveredTeacher(null)}
              >
                <div className="relative mb-4">
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-full shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-32 h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                      <div className="w-full h-full rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Qualification Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-4 h-4 text-white" />
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-green-400 to-blue-500 px-3 py-1 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs font-bold text-white">{teacher.experience}</span>
                  </div>
                </div>
                
                <div className="transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 mb-2">{teacher.specialization}</p>
                  
                  {/* Hover Details */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    hoveredTeacher === teacher.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 mt-3 shadow-lg border border-indigo-200">
                      <p className="text-xs text-gray-600 mb-2 font-medium">{teacher.qualification}</p>
                      <div className="space-y-1">
                        {teacher.expertise.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                            <span className="text-xs text-gray-700">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Faculty Stats */}
        <RevealWrapper delay={800}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-indigo-200">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full w-fit mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Certified Instructors</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-200">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-full w-fit mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Countries Represented</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-pink-200">
              <div className="bg-gradient-to-r from-pink-500 to-red-600 p-3 rounded-full w-fit mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-pink-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Average Years Experience</div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};