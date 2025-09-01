import React from 'react';
import { Users, GraduationCap, Globe, Heart } from 'lucide-react';
import { Button } from '../ui/Button';

export const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Our Vision: <span className="text-orange-600">Bridging Worlds Through Language</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            SUCCEED HOUSE OF ENGLISH is more than just a language school; it's a vibrant community where aspiring English speakers transform into confident communicators. We believe that mastering English opens doors to global opportunities, fosters cross-cultural understanding, and empowers individuals to achieve their fullest potential.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our dedicated team of experienced instructors uses innovative teaching methods, personalized attention, and a supportive learning environment to ensure every student not only learns the language but truly lives it. Join us and embark on your journey to fluency!
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Expert Teachers</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Proven Methods</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Global Reach</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Personal Care</span>
            </div>
          </div>

          <Button 
            onClick={scrollToContact}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Meet Our Team
          </Button>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4">
          {/* Large main image */}
          <div className="col-span-2">
            <img
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern classroom"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Two smaller images */}
          <div>
            <img
              src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Students learning"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Teacher instruction"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Bottom row images */}
          <div>
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Study resources"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Online learning"
              className="w-full h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};