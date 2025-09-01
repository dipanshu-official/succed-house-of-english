import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { RegistrationModal } from "./modals/RegistrationModal";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
    closeMobileMenu(); // Close mobile menu if open
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMobileMenu();
  };

  const handleGalleryClick = () => {
    navigate('/gallery');
    closeMobileMenu();
  };

  return (
    <header className="w-full py-3 sm:py-4 px-4 sm:px-6 md:px-10 bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <a
          onClick={() => navigate('/')}
          className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2 cursor-pointer"
        >
          <BookOpen className="text-blue-900 w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
          <span className="hidden sm:inline">SUCCEED HOUSE OF ENGLISH</span>
          <span className="sm:hidden">SUCCEED</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-600 hover:text-orange-500 font-medium transition duration-300"
          >
            About Us
          </button>
          <button
            onClick={handleGalleryClick}
            className="text-gray-600 hover:text-orange-500 font-medium transition duration-300"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("awards")}
            className="text-gray-600 hover:text-orange-500 font-medium transition duration-300"
          >
            Awards
          </button>
          <button
            onClick={() => scrollToSection("teachers")}
            className="text-gray-600 hover:text-orange-500 font-medium transition duration-300"
          >
            Teachers
          </button>
          <button
            onClick={() => scrollToSection("courses")}
            className="text-gray-600 hover:text-orange-500 font-medium transition duration-300"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-600 hover:text-orange-500 font-medium transition duration-300"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-gray-600 hover:text-orange-500 font-medium transition duration-300"
          >
            FAQ
          </button>
          <Button
            variant="secondary"
            size="sm"
            onClick={openRegistrationModal}
            className="border-orange-500 bg-orange-500 text-gray-100 px-3 lg:px-4 py-2 rounded-lg hover:text-gray-600 text-sm lg:text-base"
          >
            Register Now
          </Button>
          <Button
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="border-orange-500 bg-orange-500 text-gray-100 px-3 lg:px-4 py-2 rounded-lg hover:text-gray-600 text-sm lg:text-base"
          >
            Enroll Now
          </Button>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition duration-300"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition duration-300"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 py-10">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-800 text-lg hover:text-blue-900 font-medium"
          >
            About Us
          </button>
          <button
            onClick={handleGalleryClick}
            className="text-gray-800 text-lg hover:text-blue-900 font-medium"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("awards")}
            className="text-gray-800 text-lg hover:text-blue-900 font-medium"
          >
            Awards
          </button>
          <button
            onClick={() => scrollToSection("teachers")}
            className="text-gray-800 text-lg hover:text-blue-900 font-medium"
          >
            Teachers
          </button>
          <button
            onClick={() => scrollToSection("courses")}
            className="text-gray-800 text-lg hover:text-blue-900 font-medium"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-800 text-lg hover:text-blue-900 font-medium"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-gray-800 text-lg hover:text-blue-900 font-medium"
          >
            FAQ
          </button>
          <Button
            variant="secondary"
            onClick={openRegistrationModal}
            className="border-orange-500 text-orange-500 hover:bg-orange-50"
          >
            Register Now
          </Button>
          <Button size="lg" onClick={() => scrollToSection("contact")}>
            Enroll Now
          </Button>
        </nav>
      </div>

      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={closeRegistrationModal}
      />
    </header>
  );
};
