import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ReasonSection = () => {
  const reasons = [
    {
      title: "Information managemnet system",
      description: "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent for all your software development needs.",
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3"
    },
    {
      title: "Information Database Security",
      description: "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent for all your software development needs.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3"
    },
    {
      title: "Multifunctional Technology",
      description: "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent for all your software development needs.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">REASON TO CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            We provide truly prominent
            <br />
            IT solutions.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              {/* Image with Overlay */}
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
              </div>

              {/* Title - Always Visible */}
              <div className="absolute bottom-6 left-0 right-0 px-6 text-white transition-transform duration-300 group-hover:translate-y-[-100px]">
                <div className="flex items-start space-x-2">
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-600 mt-1"></div>
                  <h3 className="text-2xl font-bold leading-tight">{reason.title}</h3>
                </div>
              </div>

              {/* Description - Hidden by Default, Slides Up on Hover */}
              <div className="absolute bottom-0 left-0 right-0 px-6 text-white translate-y-full transition-transform duration-300 group-hover:translate-y-[-24px]">
                <p className="text-gray-200">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <div className="text-center mt-12">
          <Link to="/about" className="text-blue-500 font-semibold inline-flex items-center hover:text-blue-700">
            Learn more about <span className="text-blue-700 ml-1">More reason</span> <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReasonSection; 