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
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">SUCCEED HOUSE OF ENGLISH</h3>
          <p className="text-sm">
            Empowering students to communicate confidently and achieve their global aspirations through exceptional English language education.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-orange-500 transition duration-300 text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="hover:text-orange-500 transition duration-300 text-left"
              >
                Gallery
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
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition duration-300 flex items-center gap-2">
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition duration-300 flex items-center gap-2">
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition duration-300 flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition duration-300 flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 rounded-l-md bg-gray-700 border border-gray-600 text-white text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600 transition duration-300"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        &copy; 2024 SUCCEED HOUSE OF ENGLISH. All rights reserved.
      </div>
    </footer>
  );
};