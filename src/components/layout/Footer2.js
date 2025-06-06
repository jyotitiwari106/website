import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset
} from 'react-icons/fa';

import bg from '../../assets/foot.png'

const Footer2 = () => {
  return (
    <footer className="relative bg-dark bg-gradient-to-b from-[#010a1a] to-[#021e40] text-white pt-16 pb-8 overflow-hidden">
      {/* Background Image */}
       {/*  <img
        src={bg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 -z-10"
      />*/}
       


      {/* Optional dark overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-10"></div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-3xl font-bold text-white mb-6 inline-block">
              Tech<span className="text-secondary">wix</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Techwix specializes in innovative IT solutions, helping businesses transform through digital technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#2d343b] flex items-center justify-center hover:bg-secondary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#2d343b] flex items-center justify-center hover:bg-secondary transition-colors">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#2d343b] flex items-center justify-center hover:bg-secondary transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#2d343b] flex items-center justify-center hover:bg-secondary transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-secondary transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-secondary transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">IT Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/it-consulting" className="text-gray-400 hover:text-secondary transition-colors">IT Consulting</Link></li>
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-secondary transition-colors">Web Development</Link></li>
              <li><Link to="/services/app-development" className="text-gray-400 hover:text-secondary transition-colors">App Development</Link></li>
              <li><Link to="/services/cloud-services" className="text-gray-400 hover:text-secondary transition-colors">Cloud Services</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-400 hover:text-secondary transition-colors">Cyber Security</Link></li>
              <li><Link to="/services/data-analytics" className="text-gray-400 hover:text-secondary transition-colors">Data Analytics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhoneAlt className="mr-3 text-secondary mt-1" />
                <div>
                  <p className="text-gray-400">Phone:</p>
                  <p className="text-white">+1 (800) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mr-3 text-secondary mt-1" />
                <div>
                  <p className="text-gray-400">Email:</p>
                  <p className="text-white">info@techwix.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-secondary mt-1" />
                <div>
                  <p className="text-gray-400">Location:</p>
                  <p className="text-white">123 Tech Street, Silicon Valley, CA 94043</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-white">Techwix</span>. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link to="/terms" className="text-gray-400 hover:text-secondary transition-colors">Terms of Use</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/sitemap" className="text-gray-400 hover:text-secondary transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
