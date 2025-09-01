import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { RegistrationModal } from '../modals/RegistrationModal';
import img1 from '../../public/hero/banner1.jpg'
import img2 from '../../public/hero/banner2.jpg'
import img3 from '../../public/hero/banner3.jpg'
import img4 from '../../public/hero/banner4.jpg'


export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const slides = [
    {
      id: '1',
      src: img1,
      alt: 'Modern classroom with engaged students',
      title: 'Interactive Learning Environment',
      subtitle: 'Experience dynamic classrooms designed for effective English learning'
    },
    {
      id: '2',
      src: img2,
      alt: 'Expert teacher explaining concepts',
      title: 'Expert Instruction',
      subtitle: 'Learn from certified professionals with years of teaching experience'
    },
    {
      id: '3',
      src: img3,
      alt: 'Students collaborating in group discussion',
      title: 'Collaborative Learning',
      subtitle: 'Build confidence through interactive group activities and discussions'
    },
    {
      id: '4',
      src: img4,
      alt: 'Online learning setup with technology',
      title: 'Flexible Online Classes',
      subtitle: 'Access quality education from anywhere with our virtual classrooms'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-green-900/60"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 inline-block border border-white/20">
            <p className="text-white font-medium text-lg">
              Welcome to SUCCEED HOUSE OF ENGLISH! 🎉
            </p>
          </div>
          <h3 className="text-lg md:text-xl font-medium mb-2 opacity-90 animate-fade-in-up">
            {slides[currentSlide].title}
          </h3>
          <p className="text-sm md:text-base opacity-75 animate-fade-in-up animation-delay-300">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up animation-delay-500">
          Unlock Your Global Potential with{' '}
          <span className="bg-gradient-to-r from-orange-300 via-yellow-300 to-green-300 bg-clip-text text-transparent">
            Master English
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in-up animation-delay-700">
          At SUCCEED HOUSE OF ENGLISH, we empower you to communicate confidently, achieve academic excellence, and open doors to new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-700">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('courses')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-2xl transform hover:scale-105 w-full sm:w-auto"
          >
            Explore Our Courses
          </Button>
          <Button 
            variant="secondary"
            size="lg" 
            onClick={openRegistrationModal}
            className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform hover:scale-105 w-full sm:w-auto"
          >
            Register Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection('testimonials')}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform hover:scale-105 w-full sm:w-auto"
          >
            Hear from Our Students
          </Button>
        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white bg-opacity-75 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Slide Information Overlay */}
      <div className="absolute top-24 right-4 md:right-8 z-30 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-md rounded-xl p-3 md:p-4 text-white max-w-xs border border-white/20 hidden sm:block">
        <div className="text-sm opacity-75 mb-1">
          {currentSlide + 1} / {slides.length}
        </div>
        <h4 className="font-semibold text-base md:text-lg mb-1">{slides[currentSlide].title}</h4>
        <p className="text-xs md:text-sm opacity-90">{slides[currentSlide].subtitle}</p>
      </div>
      
      <RegistrationModal 
        isOpen={isRegistrationModalOpen}
        onClose={closeRegistrationModal}
      />
    </section>
  );
};