import React from 'react';
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaQuora, FaYoutube } from 'react-icons/fa6';
import graphImage from '../../assets/About/image1.png'; // Background image

const VisionMissionSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${graphImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#06283D]/20 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            At <span className="text-white">SkillForge Technologies</span>,
          </h2>

          <div>
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-lg mt-2">
              We aspire to become a global execution partner for businesses.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-lg mt-2">
              Our mission is to support our clients in developing robust systems for achieving their goals and attaining business excellence. Just as atoms are the building blocks of molecules, systems are the building blocks of remarkable results.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 pt-4">
            <a href="#" className="bg-black p-3 rounded"><FaXTwitter /></a>
            <a href="#" className="bg-blue-600 p-3 rounded"><FaFacebookF /></a>
            <a href="#" className="bg-blue-800 p-3 rounded"><FaLinkedinIn /></a>
            <a href="#" className="bg-red-600 p-3 rounded"><FaQuora /></a>
            <a href="#" className="bg-red-700 p-3 rounded"><FaYoutube /></a>
          </div>
        </div>

        {/* Right Side Graphic (Optional) */}
      
      </div>
    </div>
  );
};

export default VisionMissionSection;
