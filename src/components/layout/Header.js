import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './../../assets/images/logo.png';
import '../../App.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg p-2' : 'bg-white p-2'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <img src={logo} alt="Logo" className="h-14 w-14" />
          <div className='flex flex-col'>
          <div className="leading-tight text-primary font-bold text-sm md:text-base">
            <p>SkillForge </p>
            <span className="text-sm md:text-base">Technologies</span>
          </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-lg font-semibold">
          <Link to="/" className="hover:text-blue-700 text-gray-800">Home</Link>
          <Link to="/about" className="hover:text-blue-700 text-gray-800">About</Link>
          <Link to="/services" className="hover:text-blue-700 text-gray-800">Services</Link>
          <Link to="/career" className="hover:text-blue-700 text-gray-800">Career</Link>
          <Link to="/blog" className="hover:text-blue-700 text-gray-800">Blog</Link>
          <Link to="/contact" className="hover:text-blue-700 text-gray-800">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link to="/contact">
            <button className="text-white bg-gradient-to-br from-sky-500 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-semibold text-sm px-5 py-2.5">
              GET STARTED
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl text-gray-800">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white w-full py-6 shadow-lg mt-2">
          <nav className="flex flex-col space-y-4 px-6 text-base font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600">About</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600">Services</Link>
            <Link to="/career" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600">Career</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600">Blog</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-blue-600">Contact</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="mt-2 text-white w-full bg-gradient-to-br from-sky-500 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-semibold text-sm px-5 py-2.5">
                Get A Quote
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
