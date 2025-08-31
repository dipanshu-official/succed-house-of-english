import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
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
        <div className="bg-gradient-to-br from-orange-500 to-green-600 text-white py-16">
          <div className="container mx-auto px-6">
            <RevealWrapper>
              <div className="flex items-center mb-6">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 text-white hover:text-orange-200 transition-colors duration-300 mr-4"
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
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <RevealWrapper key={image.id} delay={50 * (index + 1)}>
                <div 
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-200 text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          {/* Results Count */}
          <RevealWrapper delay={300}>
            <div className="text-center mt-12">
              <p className="text-gray-600">
                Showing {filteredImages.length} of {galleryImages.length} images
                {activeFilter !== 'all' && ` in "${categories.find(c => c.id === activeFilter)?.label}"`}
              </p>
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