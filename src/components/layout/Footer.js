import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import bg from '../../assets/foot.png';
import radio from '../../assets/radio.png'
import footer  from '../../assets/footer-bg.jpg'
import logo from './../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className='flex text-2xl '>
     
    <div className='flex  absolute flex-col justify-center items-center mt-38 w-full'>
      <div className='flex flex-col absolute  mb-96 h-20 z-10 container'>
         <img src={bg}
          alt=""
          className="absolute inset-0 w-full h-72 opacity-15"
        />
        </div>
    
      {/* Gradient Section with 10px gap from footer */}
      
     <div className="relative z-10 flex justify-center w-full mt-20">
  {/* Background Gradient Section */}
  <div className="relative w-[80%] bg-gradient-to-r from-blue-400 via-blue-600 to-purple-900 h-60 rounded-xl flex items-center justify-between px-10 md:px-20 text-white overflow-hidden">

    {/* Background Image Layer (wave texture) */}
    <img
      src={bg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-xl"
    />

    {/* Left: Circular Icon */}
    <div className="relative z-10 flex items-center justify-center h-32 w-32 bg-[#070C1F] rounded-full">
      <img src={radio} alt="icon" className="h-20 w-20" />
    </div>

    {/* Center: Text */}
    <div className="relative z-10 !text-3xl md:text-2xl font-bold text-center flex-1 px-6">
      We’re delivering the best customer experience
    </div>

    {/* Right: Button */}
    <div className="relative z-10">
      <button className="bg-white text-blue-600 text-2xl font-semibold h-16 w-48 rounded-md shadow-md hover:shadow-lg transition">
        Get Started
      </button>
    </div>
  </div>
</div>

      {/* Footer Section */}
      <footer className="flex-col pt-20 relative !text-2xl flex justify-center items-center  w-full text-white h-[550px] md:px-20"
      style={{
    backgroundImage: `url(${footer})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
      >
        <div className=' flex flex-col justify-center items-center '>
        <div className=" w-[85%] mx-auto grid md:grid-cols-4 mt-24 gap-8">
          
          {/* Company Info */}
          <div>
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <img src={logo} alt='' className="h-20 w-20"></img>
              SkillForge Technologies
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent.
            </p>
            <div className="flex  gap-4 mt-4">
              <a href="#" className="bg-white text-blue-600 p-2 !text-2xl rounded-full">
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
          <div>
            <h3 className=" font-semibold !text-2xl mb-4">Useful Links</h3>
            <ul className="space-y-2 text-xl text-gray-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Company</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Why Choose Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-xl text-gray-300">
              <li><a href="#">Infrastructure Technology</a></li>
              <li><a href="#">Blockchain Technology</a></li>
              <li><a href="#">Advanced Technology</a></li>
              <li><a href="#">Data Management</a></li>
              <li><a href="#">Security Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-xl text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhoneAlt  className="text-blue-400" /> +91 9170413229
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400"/>skillforge@skillforgetechnologies.in
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" /> 60 East 65th Street, NY
              </li>
            </ul>
          </div>

        </div>
        </div> 
        
      </footer>
      <div className='bg-[#040816] w-full !text-2xl flex justify-center items-center '>
         <div className="w-[80%] border-t border-gray-700 py-4 text-center text-gray-400 text-lg">
    © Copyrights {new Date().getFullYear()} SkillForge Technologies. All rights reserved.
  </div></div>
    </div>
    </div>
  );
};

export default Footer;
