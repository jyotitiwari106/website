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
      scrolled ? 'bg-white shadow-lg p-2' : 'bg-white p-2 '
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <p className=" items-center">
          <Link to="/" className="flex gap-1 text-xl font-bold text-primary">
           <img src={logo} alt='' className=' h-16 w-16'/>
          <p className='flex-col flex justify-center items-center'> SkillForge <p>Technologies</p></p>
          </Link>
           
        </p>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex text-lg !font-bold gap-8">
          <Link to="/" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Home</Link>
          <Link to="/about" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">About</Link>
          <Link to="/services" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Services</Link>
          <Link to="/team" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Team</Link>
          <Link to="/case-studies" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Case Studies</Link>
          <Link to="/blog" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Blog</Link>
          <Link to="/contact" className="font-medium text-dark hover:text-secondary transition-colors hover:text-blue-700">Contact</Link>
        </nav>
  {/*  <button className="flex bg-linear-to-t from-sky-500 to-indigo-500 p-2 !text-xl "> <span className='flex !gap-3'> <FaSearch className='flex justify-center items-center mt-2' />Get A Quote</span></button>*/} 
       <div className=' flex justify-center items-center mt-3 '>
        <button type="button" className="flex justify-center items-center  text-white bg-gradient-to-br from-sky-500 to-blue-600  hover:bg-gradient-to-bl focus:ring-5 focus:outline-none lg:h-12 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg font-bold text-sm px-5 py-2.5 text-center me-2 mb-2">GET STARTED</button>
      
      </div>  <div className="flex hidden lg:flex items-center  ">
        
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
                className="btn btn-secondary rounded-md inline-block "
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