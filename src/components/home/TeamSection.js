// components/TeamSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaFacebookF, FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team1 from '../../assets/Team/team-1.jpg'
import team2 from '../../assets/Team/team-2.jpg'
import team3 from '../../assets/Team/team-3.jpg'
import team4 from '../../assets/Team/team-4.jpg'

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const teamMembers = [
    {
      name: 'Andrew Max Fetcher',
      role: 'CEO, techwix',
      image: team1,
    },
    {
      name: 'Arnold Human',
      role: 'CEO, techwix',
      image: team2,
    },
    {
      name: 'Mike Holder',
      role: 'CEO, techwix',
      image: team3,
    },
    {
      name: 'Joakim Ken',
      role: 'CEO, techwix',
      image: team4,
    },
   
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2">OUR EXPERT TEAM</p>
          <h2 className="text-4xl md:text-5xl font-bold">We have world expert team</h2>
        </div>
        
        <Slider {...settings} className="team-slider">
          {teamMembers.map((member, index) => (
            <div key={index} className="px-3">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Member Info - Shows on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 inline-block px-4 py-1 rounded-lg mb-3">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                  </div>
                  <p className="text-gray-200 mb-4">{member.role}</p>
                  
                  {/* Social Icons - Hidden by default, shown on hover */}
                  <div className="flex space-x-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <FaTwitter size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <FaDribbble size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <FaBehance size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .team-slider .slick-dots li button:before {
          font-size: 12px;
          color: #3B82F6;
        }
        .team-slider .slick-dots li.slick-active button:before {
          color: #3B82F6;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
