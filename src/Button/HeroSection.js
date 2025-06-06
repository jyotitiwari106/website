import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import images from '../../assets/images/home.jpg';
import '../../App.css';
import img2 from '../../assets/images/imge.png'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={images}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center px-[10%] text-white h-full ">
        <p className="mb-2 md:text-xl lg:text-2xl font-bold leading-tight">Technology Related Consultancy</p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          We transform ideas    
        </h1>
        <span className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"> into technology</span>
        <p className="text-gray-300 text-3xl font-bold leading-tight w-[60%] ">
         
We provide the most responsive and functional IT design for
 companies and businesses worldwide.
        </p>
    <div className=' pt-8 !shadow-lg !rounded-lg'> 
<button className="btn-12 w-[20%] !text-2xl "><span className=''>Read More</span></button>
</div>  

      </div>
      <div className=' h-96'>
  <img src={img2} alt=''/>
</div>
    </section>
  );
};

export default HeroSection;
