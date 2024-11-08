import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Importing icons
import logo from '../assets/images/images/qto logo_new1.png';

function Footer() {
  return (
    <div className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={logo} alt="Logo" className="w-40 mb-4" />
          <p className="text-gray-400">
            QTO Solutions is a Professional Estimation and Quantity Take-off Service Provider. We assist our clients in the pain-staking and time-consuming involvement of Building Estimation. With QTO Solutions, the bidding process is made simple.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-400 text-lg" />
              <p>info@qtosol.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-400 text-lg" />
              <p>support@qtosol.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <a href="#home" className="block hover:text-yellow-400 transition duration-300 cursor-pointer">Home</a>
            <a href="#about" className="block hover:text-yellow-400 transition duration-300 cursor-pointer">About Us</a>
            <a href="#contact" className="block hover:text-yellow-400 transition duration-300 cursor-pointer">Contact Us</a>
            <a href="#faqs" className="block hover:text-yellow-400 transition duration-300 cursor-pointer">FAQs</a>
            <a href="#career" className="block hover:text-yellow-400 transition duration-300 cursor-pointer">Career</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12">
        <p className="text-gray-500">© 2024 QTO SOLUTIONS - ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default Footer;
