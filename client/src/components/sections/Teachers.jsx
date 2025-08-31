import React from 'react';
import { GraduationCap, Globe, Star, Award, BookOpen, Users } from 'lucide-react';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Teachers = () => {
  const teachers = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      title: 'Head of Academic Programs',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'PhD in Applied Linguistics, Cambridge University',
      experience: '15+ years in English language education',
      specializations: ['IELTS Preparation', 'Academic Writing', 'Curriculum Development'],
      languages: ['English (Native)', 'Spanish', 'French'],
      rating: 5,
      achievements: 'Published researcher in language acquisition',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Business English Specialist',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MA in TESOL, University of Oxford',
      experience: '12+ years in corporate training',
      specializations: ['Business Communication', 'Presentation Skills', 'Professional Writing'],
      languages: ['English (Native)', 'Mandarin', 'Japanese'],
      rating: 5,
      achievements: 'Former corporate trainer at Fortune 500 companies',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      title: 'TOEFL & Speaking Coach',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MA in English Literature, Harvard University',
      experience: '10+ years in exam preparation',
      specializations: ['TOEFL Preparation', 'Speaking Fluency', 'Pronunciation'],
      languages: ['English (Native)', 'Spanish', 'Portuguese'],
      rating: 5,
      achievements: 'TOEFL certified trainer with 95% student pass rate',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: '4',
      name: 'James Wilson',
      title: 'General English Coordinator',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'BA in English Education, University of Toronto',
      experience: '8+ years in language instruction',
      specializations: ['General English', 'Grammar', 'Conversation Classes'],
      languages: ['English (Native)', 'German', 'Italian'],
      rating: 5,
      achievements: 'CELTA certified with distinction',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: '5',
      name: 'Dr. Priya Patel',
      title: 'Online Learning Director',
      image: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'PhD in Educational Technology, MIT',
      experience: '14+ years in digital education',
      specializations: ['Online Pedagogy', 'Educational Technology', 'Student Engagement'],
      languages: ['English (Native)', 'Hindi', 'Gujarati'],
      rating: 5,
      achievements: 'Pioneer in virtual classroom methodologies',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      id: '6',
      name: 'Robert Thompson',
      title: 'Cambridge Exam Specialist',
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MA in Applied Linguistics, University of Edinburgh',
      experience: '11+ years in Cambridge exam prep',
      specializations: ['Cambridge Exams', 'Advanced Grammar', 'Academic Skills'],
      languages: ['English (Native)', 'French', 'Russian'],
      rating: 5,
      achievements: 'Cambridge certified examiner and trainer',
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    }
  ];

  const teachingPrinciples = [
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Every student receives individual attention tailored to their unique learning style and goals.'
    },
    {
      icon: BookOpen,
      title: 'Proven Methods',
      description: 'We use research-backed teaching methodologies that have helped thousands achieve fluency.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Our diverse faculty brings international experience and cultural insights to every lesson.'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

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
              Learn from passionate educators who are dedicated to helping you achieve your English language goals through personalized instruction and proven teaching methods.
            </p>
          </div>
        </RevealWrapper>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <RevealWrapper key={teacher.id} delay={100 * (index + 1)}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                {/* Teacher Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <div className="flex items-center space-x-1">
                      {renderStars(teacher.rating)}
                    </div>
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className={`${teacher.bgColor} p-2 rounded-full mr-3`}>
                      <GraduationCap className={`w-5 h-5 ${teacher.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                      <p className="text-sm text-gray-600 font-medium">{teacher.title}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Education:</p>
                      <p className="text-gray-600">{teacher.education}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Experience:</p>
                      <p className="text-gray-600">{teacher.experience}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Specializations:</p>
                      <div className="flex flex-wrap gap-1">
                        {teacher.specializations.map((spec, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Languages:</p>
                      <p className="text-gray-600">{teacher.languages.join(', ')}</p>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-500 italic">{teacher.achievements}</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <RevealWrapper delay={700}>
          <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Our Teaching Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teachingPrinciples.map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 p-4 rounded-full inline-block mb-4 backdrop-blur-sm">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{principle.title}</h4>
                  <p className="text-white/90 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* Call to Action */}
        <RevealWrapper delay={900}>
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to Learn from the Best?
              </h4>
              <p className="text-gray-600 mb-6">
                Our expert teachers are here to guide you every step of the way. Schedule a consultation to meet your future instructor and discuss your learning goals.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Meet Our Teachers
              </button>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};