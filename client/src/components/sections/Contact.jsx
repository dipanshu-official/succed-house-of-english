import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { RevealWrapper } from '../ui/RevealWrapper';

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ fullName: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-100 via-gray-100 to-blue-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <RevealWrapper>
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-600 to-blue-600 text-white px-6 py-2 rounded-full mb-4">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Contact Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-700 via-gray-700 to-blue-700 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your English learning journey? We're here to help you every step of the way.
            </p>
          </div>
        </RevealWrapper>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Connect With Us Section */}
            <RevealWrapper delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Whether you're interested in our courses, need information about our programs, 
                    or want to schedule a consultation, we'd love to hear from you.
                  </p>
                </div>

                {/* Contact Information Cards */}
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Email</h4>
                      <p className="text-gray-600">info@succeedhouse.com</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-lg mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-lg mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Location</h4>
                      <p className="text-gray-600">123 Language Lane, Global City, GC 98765</p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
                  <h4 className="font-semibold text-gray-900 mb-4">Office Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium text-gray-900">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium text-gray-900">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-110 shadow-xl">
                    <Phone className="w-5 h-5 mx-auto mb-2" />
                    <span className="font-medium">Call Now</span>
                  </button>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-110 shadow-xl">
                    <Mail className="w-5 h-5 mx-auto mb-2" />
                    <span className="font-medium">Live Chat</span>
                  </button>
                </div>
              </div>
            </RevealWrapper>

            {/* Start a Conversation Section */}
            <RevealWrapper delay={400}>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Start a Conversation</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Mail className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-white/80 focus:bg-white shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-white/80 focus:bg-white shadow-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-white/80 focus:bg-white shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your English learning goals or how we can help..."
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-white/80 focus:bg-white resize-none shadow-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <span>Send Message</span>
                          <Send className="w-5 h-5 ml-2" />
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Additional Information */}
        <RevealWrapper delay={600}>
          <div className="mt-16 text-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 max-w-4xl mx-auto relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100/50 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-indigo-100/50 to-transparent rounded-tl-full"></div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to Begin Your English Journey?
              </h4>
              <p className="text-gray-600 mb-6">
                Join thousands of students who have transformed their English skills with our expert guidance. 
                Schedule a free consultation to discuss your learning goals and find the perfect course for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Free Consultation
                </Button>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Download Course Brochure
                </Button>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};