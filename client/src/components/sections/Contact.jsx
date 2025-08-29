import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-orange-50">
      <div className="container mx-auto px-6 text-center">
        <RevealWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Get in Touch with SUCCEED HOUSE OF ENGLISH
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={200}>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600 mb-8">
              Have questions or ready to enroll? Fill out the form below and we'll get back to you shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={400}>
          <div className="mt-12 text-gray-700 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-900" />
              <span>123 Language Lane, Global City, GC 98765</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-blue-900" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6 text-blue-900" />
              <span>info@succeedhouse.com</span>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};