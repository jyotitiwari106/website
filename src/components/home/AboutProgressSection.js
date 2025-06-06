import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const AboutProgressSection = () => {
  const progressItems = [
    {
      title: "IT Management",
      percentage: 80
    },
    {
      title: "Data Security",
      percentage: 95
    },
    {
      title: "Information Technology",
      percentage: 80
    },
    {
      title: "Technology Consultant",
      percentage: 90
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Preparing for your success,
              <br />
              we provide truly prominent
              <br />
              IT solutions
            </h2>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg inline-block mb-8">
              <div className="text-6xl font-bold mb-2">25</div>
              <div className="text-xl">Years of experience</div>
            </div>

            <p className="text-gray-600 text-lg mb-8">
              Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible
              freelance talent for all your software development needs.
            </p>

            <Link to="/about" className="text-blue-500 font-semibold inline-flex items-center hover:text-blue-700">
              Learn More About Us <FaArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {progressItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium">{item.title}</span>
                  <span className="text-lg font-bold bg-black text-white px-2 rounded">
                    {item.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProgressSection; 