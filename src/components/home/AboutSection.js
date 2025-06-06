import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import about1 from '../../assets/TECW0009.jpg'
import about2 from '../../assets/images/TECW0008.jpg'
const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     
         

          {/* Content */}
          <div>
            <span className="text-secondary text-blue-700 font-bold tracking-widest text-xl">WHO WE ARE</span>
            <h2 className="text-6xl font-bold mt-2 mb-6 w-[100%]">Highly Tailored IT Design, Management & Support Services</h2>
            <p className="text-xl mb-6 w-[80%] text-gray-600">
            Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                  <FaCheck className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Expert Team</h4>
                  <p className="text-gray text-sm">Skilled professionals with deep expertise</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                  <FaCheck className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Quality Service</h4>
                  <p className="text-gray text-sm">Committed to excellence in every project</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                  <FaCheck className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Innovative Solutions</h4>
                  <p className="text-gray text-sm">Cutting-edge technology implementation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-3">
                  <FaCheck className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">24/7 Support</h4>
                  <p className="text-gray text-sm">Always available technical assistance</p>
                </div>
              </div>
            </div>
            
           
           {/* <Link to="/about" className="btn btn-primary rounded-md">
              Learn More About Us
            </Link>*/}
          </div>
       <div className="flex justify-end items-center relative">
  <div className="bg-light p-3 rounded-lg">
    <img 
      src={about1}
      alt="About Techwix"  
      className="rounded-lg h-[70vh] w-[50vh]"
    />
  </div>

  {/* Positioned image on top of about1 */}
  <div className="absolute mt-10 top-1/2 left-[45%] -translate-x-[60%] -translate-y-1/2 bg-white rounded-lg p-4 shadow-xl max-w-none">
  <img src={about2} alt='' className="w-[600px] h-[320px] " />
  <div className="flex items-center space-x-4">
    {/* Additional content */}
  </div>
</div>

</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection; 