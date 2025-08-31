import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, BookOpen, GraduationCap, Clock, MapPin } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';





export const RegistrationModal= ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    course: '',
    level: '',
    schedule: '',
    location: '',
    goals: '',
    experience: '',
    hearAbout: ''
  });

  const totalSteps = 3;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // Handle form submission here
    onClose();
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      course: '',
      level: '',
      schedule: '',
      location: '',
      goals: '',
      experience: '',
      hearAbout: ''
    });
    setCurrentStep(1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.course && formData.level && formData.schedule && formData.location;
      case 3:
        return formData.goals && formData.experience;
      default:
        return false;
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Register for English Courses"
      size="lg"
      
    >
      <div className="mb-6 ">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-4 ">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-300 ${
                  step <= currentStep
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`w-16 h-1 mx-2 transition-colors duration-300 ${
                    step < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            {currentStep === 1 && 'Personal Information'}
            {currentStep === 2 && 'Course Preferences'}
            {currentStep === 3 && 'Learning Goals'}
          </h3>
          <p className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              />
            </div>
          </div>
        )}

        {/* Step 2: Course Preferences */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <BookOpen className="w-4 h-4 inline mr-1" />
                Course Type *
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              >
                <option value="">Select a course</option>
                <option value="general">General English Program</option>
                <option value="exam-prep">Exam Preparation (IELTS/TOEFL)</option>
                <option value="business">Business English</option>
                <option value="conversation">Conversation Classes</option>
                <option value="academic">Academic English</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <GraduationCap className="w-4 h-4 inline mr-1" />
                Current English Level *
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner (A1)</option>
                <option value="elementary">Elementary (A2)</option>
                <option value="intermediate">Intermediate (B1)</option>
                <option value="upper-intermediate">Upper Intermediate (B2)</option>
                <option value="advanced">Advanced (C1)</option>
                <option value="proficient">Proficient (C2)</option>
                <option value="unsure">Not sure - Need assessment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline mr-1" />
                Preferred Schedule *
              </label>
              <select
                name="schedule"
                value={formData.schedule}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              >
                <option value="">Select schedule</option>
                <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                <option value="evening">Evening (6:00 PM - 9:00 PM)</option>
                <option value="weekend">Weekend Classes</option>
                <option value="flexible">Flexible/Online</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Learning Preference *
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              >
                <option value="">Select preference</option>
                <option value="in-person">In-Person Classes</option>
                <option value="online">Online Classes</option>
                <option value="hybrid">Hybrid (Mix of both)</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Learning Goals */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Learning Goals *
              </label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                placeholder="What do you hope to achieve? (e.g., improve speaking confidence, pass IELTS exam, advance career, etc.)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Previous English Learning Experience *
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
                placeholder="Tell us about your previous English learning experience (schools, courses, self-study, etc.)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How did you hear about us?
              </label>
              <select
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-300"
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="friend">Friend/Family Recommendation</option>
                <option value="advertisement">Advertisement</option>
                <option value="website">Educational Website</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <div className="flex space-x-3">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Previous
              </Button>
            )}
          </div>
          
          <div className="flex space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!isStepValid()}
                className="disabled:opacity-50 disabled:cursor-not-allowed bg-green-600 hover:bg-green-700"
              >
                Complete Registration
              </Button>
            )}
          </div>
        </div>
      </form>

      {/* Success Message Preview */}
      {currentStep === totalSteps && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center text-green-800">
            <GraduationCap className="w-5 h-5 mr-2" />
            <span className="font-medium">Almost there!</span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            Click "Complete Registration" to submit your application. We'll contact you within 24 hours to schedule your placement test and discuss next steps.
          </p>
        </div>
      )}
    </Modal>
  );
};