  import React, { useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import { FaArrowRight, FaFingerprint, FaShieldAlt, FaCloud, FaCubes } from 'react-icons/fa';
  import { motion } from 'framer-motion';
  import images from '../../assets/images/home.jpg';
  import '../../App.css';
  import img2 from '../../assets/images/imge.png'
  import bg2 from '../../assets/service-bg3.jpg'

  const HeroSection = () => {
    const services = [
      {
        icon: <FaFingerprint className="text-4xl text-blue-500" />,
        title: "Infrastructure Technology",
        description: "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent.",
        isBlue: false
      },
      {
        icon: <FaShieldAlt className="text-4xl text-blue-500" />,
        title: "IT Consultancy & Solution",
        titleColor: "text-blue-500",
        description: "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent.",
        isBlue: true
      },
      {
        icon: <FaCloud className="text-4xl text-blue-500" />,
        title: "Cloud Managed Services",
        description: "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent.",
        isBlue: false
      },
      {
        icon: <FaCubes className="text-4xl text-blue-500" />,
        title: "Blockchain Technology",
        description: "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible freelance talent.",
        isBlue: false
      }
    ];

    return (
      <div className="relative">
        {/* Hero Section */}
        <section className="relative h-[800px] md:h-[150vh]  w-full overflow-hidden">
          {/* Background Image with Parallax Effect */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={images}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover z-0 transform hover:scale-105 transition-transform duration-3000"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col pt-56 px-4 md:px-[10%] text-white h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="mb-2 text-lg md:text-xl lg:text-2xl font-bold leading-tight text-blue-400">
                Technology Related Consultancy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4">
                We transform ideas
                <br />
                <span className="text-blue-400">into technology</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-lg md:text-2xl lg:text-3xl font-bold leading-tight w-full md:w-[60%] mb-8"
            >
              We provide the most responsive and functional IT design for companies and businesses worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-3"
            >
              <button className="btn-12  !p-4 text-xl md:text-2xl hover:scale-105 transition-transform duration-300">
                <span className='text-xl'>Read More</span>
              </button>
            </motion.div>
          </div>
          {/* <div className=' h-96'>
      <img src={img2} alt=''/>
    </div>*/}
        </section>

        {/* Services Cards Section */}
        <section
          className="relative z-0 flex justify-center pt-0 pb-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="w-[95%] md:w-[80%] mx-auto px-4 -mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="rounded-lg p-4 flex flex-col justify-center items-center bg-white shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-opacity-95"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-1 text-black"
                  >
                    {service.icon}
                  </motion.div>
                  <h4 className="flex justify-center items-center !text-center text-xl md:text-xl p-2 font-bold  text-black">
                    {service.title}
                  </h4>
                  <p className="mb-4 text-gray-600 text-sm md:text-base w-full  p-3">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <span className="mr-2">Read More</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaArrowRight />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default HeroSection;
