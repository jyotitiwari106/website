import React from 'react';
import { Link } from 'react-router-dom';
import { FaDesktop, FaMobileAlt, FaCloud, FaShieldAlt, FaChartLine, FaCode } from 'react-icons/fa';
import bgimg from '../../assets/Home.jpg';
import img2 from '../../assets/bgimage.jpg'

const serviceItems = [
  {
    id: 1,
    icon: <FaDesktop className="text-4xl text-secondary" />,
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with your business goals and drive innovation.',
    link: '/services/it-consulting'
  },
  {
    id: 2,
    icon: <FaCode className="text-4xl text-secondary" />,
    title: 'Web Development',
    description: 'Custom web solutions built with cutting-edge technologies for optimal performance.',
    link: '/services/web-development'
  },
  {
    id: 3,
    icon: <FaMobileAlt className="text-4xl text-secondary" />,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    link: '/services/app-development'
  },
  {
    id: 4,
    icon: <FaCloud className="text-4xl text-secondary" />,
    title: 'Cloud Services',
    description: 'Secure and scalable cloud solutions to optimize your infrastructure and reduce costs.',
    link: '/services/cloud-services'
  },
  {
    id: 5,
    icon: <FaShieldAlt className="text-4xl text-secondary" />,
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
    link: '/services/cybersecurity'
  },
  {
    id: 6,
    icon: <FaChartLine className="text-4xl text-secondary" />,
    title: 'Data Analytics',
    description: 'Advanced data analytics and BI solutions to unlock insights and drive informed decisions.',
    link: '/services/data-analytics'
  }
];

const ServicesSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover md:p-2 p-4"
      style={{ backgroundImage: `url(${img2})` }}
    >
      {/* Overlay for darkening the background if needed */}
      <div className="absolute inset-0 bg-white bg-opacity-65 z-0"></div>

      <div className="relative z-10 py-20 container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold text-2xl text-blue-900 tracking-widest">OUR PROJECT</span>
          <h2 className="text-4xl text-black font-bold mt-2 mb-4">We Provide Best IT Solutions</h2>
          <p className="text-black font-bold  text-xl">
            Our comprehensive range of IT services is designed to help your business thrive in the digital landscape.
          </p>
        </div>
       <div className='flex justify-center items-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-[80%] justify-center items-center">
          {serviceItems.map((service) => (
            <div
              key={service.id}
              className="bg-slate-300 bg-opacity-90 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="bg-primary bg-opacity-10  text-blue-600 w-20 h-20  rounded-lg flex items-center justify-center mb-6 hover:bg-secondary hover:bg-opacity-10 transition-colors">
  <div className="transition-transform duration-500 hover:rotate-180 ">
    {service.icon}
  </div>
</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors text-blue-600"
              >
                Learn More
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
