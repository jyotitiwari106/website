import React from 'react';
import { FaLock, FaBrain, FaShieldAlt, FaCube, FaServer, FaLightbulb, FaMicrochip, FaUserShield } from 'react-icons/fa';

const services = [
  { icon: <FaLock size={40} className="text-blue-500" />, title: 'IT Consultancy' },
  { icon: <FaBrain size={40} className="text-blue-500" />, title: 'Data Science' },
  { icon: <FaShieldAlt size={40} className="text-blue-500" />, title: 'IT Security' },
  { icon: <FaCube size={40} className="text-blue-500" />, title: 'Blockchain System' },
  { icon: <FaServer size={40} className="text-blue-500" />, title: 'IT Infrastructure' },
  { icon: <FaLightbulb size={40} className="text-blue-500" />, title: 'Data Management' },
  { icon: <FaMicrochip size={40} className="text-blue-500" />, title: 'IT Management' },
  { icon: <FaUserShield size={40} className="text-blue-500" />, title: 'Data Secure' },
];

const Project = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
    <section className=" bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-10 border rounded-xl shadow-sm hover:shadow-md transition-all bg-white text-start flex flex-col items-center gap-4"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Accelerate innovation with world-class tech teams. We’ll match you to an entire.
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Project;
