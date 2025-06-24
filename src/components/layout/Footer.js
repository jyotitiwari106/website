import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import bg from '../../assets/foot.png';
import radio from '../../assets/radio.png';
import footer from '../../assets/footer-bg.jpg';
import logo from './../../assets/images/logo.png';

const Footer = () => {
  return (
    <div className="w-full text-white text-base overflow-hidden">
      {/* Wave Background with CTA */}
      <div className="relative flex justify-center items-center mt-20 px-4 md:px-0">
        <div className="relative w-full max-w-7xl bg-gradient-to-r from-blue-400 via-blue-600 to-purple-900  p-6 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          {/* Background Image */}
          <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-xl z-0 max-w-full" />

          {/* Left Icon */}
          <div className="relative z-10 mb-6 md:mb-0">
            <div className="flex items-center justify-center h-24 w-24 md:h-32 md:w-32 bg-[#070C1F] rounded-full">
              <img src={radio} alt="icon" className="h-14 w-14 md:h-20 md:w-20 max-w-full object-contain" />
            </div>
          </div>

          {/* Center Text */}
          <div className="relative z-10 text-center md:text-left text-xl md:text-2xl font-semibold text-white mb-4 md:mb-0">
            We’re delivering the best customer experience
          </div>

          {/* Button */}
          <div className="relative z-10">
            <button className="relative inline-flex items-center justify-center overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main Section */}
      <footer
        className="py-12 bg-cover bg-center bg-no-repeat w-full overflow-hidden"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Logo" className="h-14 w-14 max-w-full object-contain" />
                <h1 className="text-lg font-bold">SkillForge Technologies</h1>
              </div>
              <p className="text-gray-300 text-sm">
                Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className='md:px-8'>
              <h3 className="text-lg font-semibold mb-4 ">Useful Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Company</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Why Choose Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#">Infrastructure Technology</a></li>
                <li><a href="#">Blockchain Technology</a></li>
                <li><a href="#">Advanced Technology</a></li>
                <li><a href="#">Data Management</a></li>
                <li><a href="#">Security Management</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-blue-400" /> +91 9170413229
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-400" /> skillforge@skillforgetechnologies.in
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-400" /> 60 East 65th Street, NY
                </li>
              </ul>
            </div>
          </div>
        </div>
         
      </footer>

      {/* Copyright */}
      <hr className='w-[80%]'/>
     <div className="bg-[#040816] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          © Copyrights {new Date().getFullYear()} SkillForge Technologies. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
