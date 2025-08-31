import React from 'react';
import { Award, Users, TrendingUp, Clock, Star, Shield } from 'lucide-react';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Awards = () => {
  const stats = [
    {
      number: '5000+',
      label: 'Successful Students',
      icon: Users,
      color: 'text-orange-600'
    },
    {
      number: '98%',
      label: 'Success Rate',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      number: '15+',
      label: 'Years Experience',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      number: '50+',
      label: 'Expert Instructors',
      icon: Star,
      color: 'text-purple-600'
    }
  ];

  const awards = [
    {
      id: '1',
      title: 'Excellence in English Education',
      year: '2024',
      organization: 'International Language Education Council',
      description: 'Recognized for outstanding teaching methods and student achievement rates.',
      icon: Award,
      bgColor: 'bg-yellow-500',
      borderColor: 'border-yellow-200'
    },
    {
      id: '2',
      title: 'Best Language School',
      year: '2023',
      organization: 'Global Education Awards',
      description: 'Awarded for exceptional curriculum design and innovative teaching approaches.',
      icon: Star,
      bgColor: 'bg-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      id: '3',
      title: 'Top IELTS Preparation Center',
      year: '2023',
      organization: 'IELTS Official Partners',
      description: 'Highest student pass rates and comprehensive exam preparation programs.',
      icon: Shield,
      bgColor: 'bg-green-600',
      borderColor: 'border-green-200'
    },
    {
      id: '4',
      title: 'Innovation in Online Learning',
      year: '2022',
      organization: 'EdTech Excellence Awards',
      description: 'Leading the way in digital education technology and virtual classroom experiences.',
      icon: TrendingUp,
      bgColor: 'bg-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      id: '5',
      title: 'Community Impact Award',
      year: '2022',
      organization: 'Local Chamber of Commerce',
      description: 'Recognized for positive impact on local community through education initiatives.',
      icon: Users,
      bgColor: 'bg-orange-500',
      borderColor: 'border-orange-200'
    },
    {
      id: '6',
      title: 'Quality Assurance Certification',
      year: '2021',
      organization: 'International Standards Organization',
      description: 'Certified for maintaining highest standards in educational quality and service.',
      icon: Shield,
      bgColor: 'bg-indigo-600',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section id="awards" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <RevealWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence in English education has been recognized by leading organizations worldwide.
            </p>
          </div>
        </RevealWrapper>

        {/* Statistics */}
        <RevealWrapper delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <RevealWrapper key={award.id} delay={100 * (index + 1)}>
              <div className={`bg-white p-8 rounded-xl shadow-lg border-2 ${award.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group`}>
                <div className={`${award.bgColor} p-4 rounded-full inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <award.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{award.title}</h3>
                <p className="text-sm text-gray-600 mb-4 font-medium">{award.organization}</p>
                <p className="text-gray-700 leading-relaxed">{award.description}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Recognition Statement */}
        <RevealWrapper delay={800}>
          <div className="bg-gradient-to-r from-orange-500 to-green-600 text-white p-8 md:p-12 rounded-2xl text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Certified Excellence in Education
            </h3>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto opacity-95">
              Our accreditations and certifications ensure that you receive world-class English education that meets international standards and opens doors to global opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                TESOL Certified
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                CELTA Accredited
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                IELTS Official Partner
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                Cambridge Authorized Center
              </span>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};