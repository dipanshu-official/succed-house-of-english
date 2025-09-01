import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Award, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { RevealWrapper } from '../components/ui/RevealWrapper';

export const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    {
      id: '1',
      src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern classroom with students',
      category: 'classroom',
      title: 'Interactive Learning Environment',
      description: 'Our state-of-the-art classrooms are designed to foster interactive learning and student engagement.'
    },
    {
      id: '2',
      src: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Students in discussion',
      category: 'students',
      title: 'Group Discussion Session',
      description: 'Students actively participating in collaborative learning activities and peer discussions.'
    },
    {
      id: '3',
      src: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Teacher explaining concepts',
      category: 'teaching',
      title: 'Expert Instruction',
      description: 'Our certified instructors provide personalized guidance and expert knowledge.'
    },
    {
      id: '4',
      src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Library and study area',
      category: 'facilities',
      title: 'Study Resources Center',
      description: 'Comprehensive library and quiet study areas for independent learning.'
    },
    {
      id: '5',
      src: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Online learning setup',
      category: 'online',
      title: 'Virtual Classroom Technology',
      description: 'Advanced technology setup for seamless online learning experiences.'
    },
    {
      id: '6',
      src: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Student presentation',
      category: 'students',
      title: 'Student Presentations',
      description: 'Students building confidence through public speaking and presentation skills.'
    },
    {
      id: '7',
      src: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Computer lab for digital learning',
      category: 'facilities',
      title: 'Digital Learning Lab',
      description: 'Modern computer lab equipped with the latest educational software and tools.'
    },
    {
      id: '8',
      src: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Graduation ceremony',
      category: 'events',
      title: 'Achievement Celebration',
      description: 'Celebrating student achievements and milestones in their English learning journey.'
    },
    {
      id: '9',
      src: 'https://images.pexels.com/photos/5212656/pexels-photo-5212656.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'One-on-one tutoring session',
      category: 'teaching',
      title: 'Personalized Guidance',
      description: 'Individual tutoring sessions for targeted skill development and support.'
    },
    {
      id: '10',
      src: 'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Language exchange activity',
      category: 'students',
      title: 'Cultural Exchange Program',
      description: 'Students from different backgrounds sharing languages and cultures.'
    },
    {
      id: '11',
      src: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Writing workshop',
      category: 'teaching',
      title: 'Writing Skills Workshop',
      description: 'Intensive workshops focused on developing academic and professional writing skills.'
    },
    {
      id: '12',
      src: 'https://images.pexels.com/photos/5427656/pexels-photo-5427656.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Speaking practice session',
      category: 'students',
      title: 'Speaking Practice Circle',
      description: 'Regular speaking practice sessions to build fluency and confidence.'
    },
    {
      id: '13',
      src: 'https://images.pexels.com/photos/5427659/pexels-photo-5427659.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Exam preparation class',
      category: 'classroom',
      title: 'IELTS Preparation Class',
      description: 'Specialized classes designed to help students excel in international English exams.'
    },
    {
      id: '14',
      src: 'https://images.pexels.com/photos/5427662/pexels-photo-5427662.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Business English seminar',
      category: 'events',
      title: 'Business English Seminar',
      description: 'Professional development seminars for workplace English communication.'
    },
    {
      id: '15',
      src: 'https://images.pexels.com/photos/5427665/pexels-photo-5427665.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Student lounge area',
      category: 'facilities',
      title: 'Student Common Area',
      description: 'Comfortable spaces for students to relax, study, and practice English together.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'classroom', label: 'Classrooms' },
    { id: 'students', label: 'Students' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'online', label: 'Online Learning' },
    { id: 'events', label: 'Events' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
      <div className="pt-20 min-h-screen bg-white">
        {/* Header Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-6">
            <RevealWrapper>
              <div className="flex items-center mb-6">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors duration-300 mr-4"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Home
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Learning Environment
              </h1>
              <p className="text-xl max-w-3xl">
                Explore our modern facilities, vibrant classrooms, and the inspiring moments that make learning English an unforgettable experience at SUCCEED HOUSE OF ENGLISH.
              </p>
            </RevealWrapper>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="container mx-auto px-6 py-16">
          {/* Filter Buttons */}
          <RevealWrapper delay={200}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeFilter === category.id
                      ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </RevealWrapper>

          {/* Gallery Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {filteredImages.map((image, index) => (
              <RevealWrapper key={image.id} delay={50 * (index + 1)}>
                <div 
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl break-inside-avoid mb-4 sm:mb-6 bg-white"
                  onClick={() => openLightbox(image)}
                >
                  {/* Image Container */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay with Information */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white font-bold text-lg sm:text-xl mb-2 leading-tight">{image.title}</h3>
                        <p className="text-gray-200 text-xs sm:text-sm mb-3 leading-relaxed">{image.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                            {image.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                            <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
                            <div className="w-2 h-2 bg-white rounded-full opacity-20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 transition-all duration-500"></div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          {/* Results Count */}
          <RevealWrapper delay={300}>
            <div className="text-center mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 max-w-md mx-auto">
                <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <p className="text-gray-700 font-semibold text-lg">
                  Showing {filteredImages.length} of {galleryImages.length} images
                  {activeFilter !== 'all' && ` in "${categories.find(c => c.id === activeFilter)?.label}"`}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Capturing moments of learning excellence
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-6 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-200 mb-2">{selectedImage.description}</p>
                  <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm capitalize">
                    {selectedImage.category}
                  </span>
                </div>
                <div className="text-right text-sm text-gray-300">
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};