import React from 'react';
import Slider from 'react-slick';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    position: 'CEO, TechCorp',
    image: 'https://ui-avatars.com/api/?name=John+Smith&background=3451B2&color=fff',
    content: 'Techwix transformed our IT infrastructure completely. Their team\'s expertise and dedication to our project exceeded our expectations.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'CTO, InnovateCo',
    image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=3451B2&color=fff',
    content: 'Working with Techwix has been a game-changer for our business. Their cloud migration strategy was flawless.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Director, GlobalTech',
    image: 'https://ui-avatars.com/api/?name=Michael+Brown&background=3451B2&color=fff',
    content: 'The cybersecurity solutions provided by Techwix have given us peace of mind. Their proactive approach is great.',
  }
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5 bg-light ">
      <div className="container mx-auto  overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary text-blue-700 font-bold tracking-widest text-xl">TESTIMONIAL</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-8">
              <div className="bg-white p-8 rounded-lg shadow-md relative h-full">
                <div className="absolute top-6 right-6 text-secondary opacity-20">
                  <FaQuoteRight size={40} />
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray text-sm">{testimonial.position}</p>
                  </div>
                </div>

                <p className="text-gray mb-6">{testimonial.content}</p>

                <div className="flex text-yellow-400">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
