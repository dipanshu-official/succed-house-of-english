import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export const Footer= () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">SUCCEED HOUSE OF ENGLISH</h3>
          <p className="text-sm sm:text-base">
            Empowering students to communicate confidently and achieve their global aspirations through exceptional English language education.
          </p>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-orange-400 transition duration-300 text-left transform hover:translate-x-1 text-sm sm:text-base"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="hover:text-orange-400 transition duration-300 text-left transform hover:translate-x-1"
              >
                Gallery
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('awards')}
                className="hover:text-orange-400 transition duration-300 text-left transform hover:translate-x-1"
              >
                Awards
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('teachers')}
                className="hover:text-orange-400 transition duration-300 text-left transform hover:translate-x-1"
              >
                Teachers
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('courses')}
                className="hover:text-orange-500 transition duration-300 text-left"
              >
                Courses
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="hover:text-orange-500 transition duration-300 text-left"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('faq')}
                className="hover:text-orange-500 transition duration-300 text-left"
              >
                FAQ
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-orange-500 transition duration-300 text-left"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="relative z-10">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2 transform hover:translate-x-1 text-sm sm:text-base">
                <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition duration-300 flex items-center gap-2 transform hover:translate-x-1">
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition duration-300 flex items-center gap-2 transform hover:translate-x-1">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2 transform hover:translate-x-1">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="relative z-10">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-xs sm:text-sm mb-4">Stay updated with our latest news and offers.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded-md sm:rounded-l-md sm:rounded-r-none bg-gray-800/80 border border-gray-600 text-white text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:from-orange-600 hover:to-red-600 transition duration-300 transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-xs sm:text-sm relative z-10">
        &copy; 2024 SUCCEED HOUSE OF ENGLISH. All rights reserved.
      </div>
    </footer>
  );
};