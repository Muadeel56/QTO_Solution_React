import React from "react";
import { FaEnvelope, FaPhoneAlt, FaHome, FaInfoCircle, FaLightbulb, FaPhone } from "react-icons/fa";
import logo from '../assets/images/qto logo_new.png';

function Header() {
  return (
    <header className="text-gray-100">
      {/* Top section for contact details */}
      <div className="flex items-center justify-end space-x-6 px-4 md:px-10 bg-gray-700 text-yellow-400 py-2">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-lg" />
          <span className="hidden sm:inline">info@qtosol.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-lg" />
          <span className="hidden sm:inline">(312)-544-0023</span>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-2 bg--900">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="h-12 md:h-24 w-auto" />
          
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center text-gray-900 space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaHome />
            <a href="#home" className="text-lg">Home</a>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaInfoCircle />
            <a href="#about" className="text-lg">About Us</a>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaLightbulb />
            <a href="#solutions" className="text-lg">Solutions</a>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaPhone />
            <a href="#contact" className="text-lg">Contact Us</a>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 md:mt-0 px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 ease-in-out">
          Get Free Quote
        </button>
      </nav>
    </header>
  );
}

export default Header;
