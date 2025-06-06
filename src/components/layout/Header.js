import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import logo from './../../assets/images/logo.png'
import '../../App.css';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 shadow-lg  top-0 left-0  transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg p-5' : 'bg-white p-5 '
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <p className=" items-center">
          <Link to="/" className="flex gap-2 text-3xl font-bold text-primary">
           <img src={logo} alt='' className=' h-24 w-24'></img>
          <h1 className='flex-col flex justify-center items-center'> SkillForge <h1>Technologies</h1></h1>
          </Link>
           
        </p>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex text-xl font-bold gap-8">
          <Link to="/" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700"><h2>Home</h2></Link>
          <Link to="/about" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">About</Link>
          <Link to="/services" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Services</Link>
          <Link to="/team" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Team</Link>
          <Link to="/case-studies" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Case Studies</Link>
          <Link to="/blog" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Blog</Link>
          <Link to="/contact" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Contact</Link>
        </nav>

        <div className="flex  hidden lg:flex items-center  ">
          <button className="flex btn-12 p-4 !text-2xl !gap-3"><span className='flex !gap-3'> <FaSearch className='flex justify-center items-center mt-2' />Get A Quote</span></button>
          <Link to="/contact" className="btn btn-secondary rounded-md text-xl"></Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-dark text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white w-full py-4 shadow-lg">
          <div className="container mx-auto">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-dark hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-dark hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="font-medium text-dark hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/team" 
                className="font-medium text-dark hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/case-studies" 
                className="font-medium text-dark hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link 
                to="/blog" 
                className="font-medium text-dark hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-dark hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link 
                to="/contact"
                className="btn btn-secondary rounded-md inline-block w-max"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get A Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 