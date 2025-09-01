import React, { useState } from 'react';
import { Star, Award, Trophy, Medal } from 'lucide-react';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Awards = () => {
  const [hoveredStudent, setHoveredStudent] = useState(null);

  const students = [
    {
      id: '1',
      name: 'Sarah Johnson',
      achievement: 'IELTS 8.5 Score',
      course: 'IELTS Preparation',
      year: '2024',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The personalized attention helped me achieve my dream score!'
    },
    {
      id: '2',
      name: 'Michael Chen',
      achievement: 'TOEFL 115/120',
      course: 'TOEFL Preparation',
      year: '2024',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Excellent teaching methods and comprehensive practice materials.'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      achievement: 'Cambridge C2 Proficiency',
      course: 'Advanced English',
      year: '2023',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'From intermediate to proficiency level in just 8 months!'
    },
    {
      id: '4',
      name: 'James Wilson',
      achievement: 'Business English Certification',
      course: 'Business English',
      year: '2024',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Perfect preparation for my international business career.'
    },
    {
      id: '5',
      name: 'Priya Patel',
      achievement: 'Academic English Excellence',
      course: 'Academic Writing',
      year: '2023',
      image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Now confidently writing research papers at university level.'
    },
    {
      id: '6',
      name: 'Robert Thompson',
      achievement: 'Speaking Fluency Award',
      course: 'Conversation Classes',
      year: '2024',
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Overcame my fear of speaking and gained true confidence.'
    },
    {
      id: '7',
      name: 'Lisa Anderson',
      achievement: 'Grammar Excellence Award',
      course: 'General English',
      year: '2023',
      image: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Perfect foundation for my academic pursuits.'
    },
    {
      id: '8',
      name: 'David Kim',
      achievement: 'Pronunciation Mastery',
      course: 'Speaking Skills',
      year: '2024',
      image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Clear communication opened new career opportunities.'
    }
  ];

  return (
    <section id="awards" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-red-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <RevealWrapper>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full mb-4">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Student Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Our Achievers
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Celebrating the remarkable achievements of our dedicated students who have excelled in their English learning journey.
            </p>
          </div>
        </RevealWrapper>

        {/* Students Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {students.map((student, index) => (
            <RevealWrapper key={student.id} delay={100 * (index + 1)}>
              <div 
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredStudent(student.id)}
                onMouseLeave={() => setHoveredStudent(null)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-4 h-4 text-white" />
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredStudent === student.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Medal className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-yellow-400">{student.achievement}</span>
                      </div>
                      <p className="text-xs opacity-90 mb-2">{student.course} • {student.year}</p>
                      <p className="text-xs italic opacity-80">"{student.quote}"</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {student.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Achievement Stats */}
        <RevealWrapper delay={800}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Successful Students</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Pass Rate</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Countries</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};