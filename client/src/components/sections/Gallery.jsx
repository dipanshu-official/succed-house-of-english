import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { RevealWrapper } from '../ui/RevealWrapper';


export const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    {
      id: '1',
      src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern classroom with students',
      category: 'classroom',
      title: 'Interactive Learning Environment'
    },
    {
      id: '2',
      src: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Students in discussion',
      category: 'students',
      title: 'Group Discussion Session'
    },
    {
      id: '3',
      src: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Teacher explaining concepts',
      category: 'teaching',
      title: 'Expert Instruction'
    },
    {
      id: '4',
      src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Library and study area',
      category: 'facilities',
      title: 'Study Resources Center'
    },
    {
      id: '5',
      src: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Online learning setup',
      category: 'online',
      title: 'Virtual Classroom Technology'
    },
    {
      id: '6',
      src: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Student presentation',
      category: 'students',
      title: 'Student Presentations'
    },
    {
      id: '7',
      src: 'https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Computer lab for digital learning',
      category: 'facilities',
      title: 'Digital Learning Lab'
    },
    {
      id: '8',
      src: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Graduation ceremony',
      category: 'events',
      title: 'Achievement Celebration'
    },
    {
      id: '9',
      src: 'https://images.pexels.com/photos/5212656/pexels-photo-5212656.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'One-on-one tutoring session',
      category: 'teaching',
      title: 'Personalized Guidance'
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

  // Show only first 6 images on home page
  const displayImages = galleryImages.slice(0, 6);

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
    
    const currentIndex = displayImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : displayImages.length - 1;
    } else {
      newIndex = currentIndex < displayImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(displayImages[newIndex]);
  };

  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Learning Environment
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take a glimpse into our modern facilities, vibrant classrooms, and the inspiring moments that make learning English an unforgettable experience.
              </p>
            </div>
          </RevealWrapper>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayImages.map((image, index) => (
              <RevealWrapper key={image.id} delay={100 * (index + 1)}>
                <div 
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-200 text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          {/* View All Button */}
          <RevealWrapper delay={800}>
            <div className="text-center mt-12">
              <Button
                onClick={() => navigate('/gallery')}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105"
              >
                View All Images ({galleryImages.length})
              </Button>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-1">{selectedImage.title}</h3>
              <p className="text-gray-200 capitalize">{selectedImage.category}</p>
              <div className="text-right text-sm text-gray-300 mt-2">
                {displayImages.findIndex(img => img.id === selectedImage.id) + 1} of {displayImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};