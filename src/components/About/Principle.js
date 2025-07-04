import React from 'react';

const PrincipleValues = () => {
  return (
    <div className="bg-gradient-to-r from-[#0F0979] to-[#0753c6] text-white rounded-xl px-6 md:px-16 py-14 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Principle And Values</h2>
      <h3 className="text-2xl text-yellow-300 font-semibold mb-6">
        At SkillForge Technologies, our team follows five principles as its value
      </h3>
      <p className="mb-8 text-lg text-white/90">
        We are a company with a straightforward and simple vision and mission is 
        "To make our customers successful." We believe that your success is our business. 
        To achieve our vision and mission, we bring customized
      </p>
      <ul className="space-y-6 text-white/90 text-base leading-relaxed">
        <li>
          <strong>1. Innovation:</strong> We grab creativity and forward-thinking to develop cutting-edge 
          solutions tailored to each client's needs. Continuously explore new technologies and 
          methodologies to stay ahead of the curve.
        </li>
        <li>
          <strong>2. Efficiency:</strong> Strive for optimal performance and resource utilization in every aspect 
          of our work. Streamline processes, automate repetitive tasks, and maximize productivity 
          to deliver results swiftly and effectively.
        </li>
        <li>
          <strong>3. Collaboration:</strong> Foster a culture of teamwork and cooperation both within our team and 
          with our clients. Recognize the value of diverse perspectives and leverage collective 
          expertise to solve complex challenges and achieve shared goals.
        </li>
        <li>
          <strong>4. Integrity:</strong> Uphold the highest standards of honesty, transparency, and ethical behavior 
          in all interactions. Build trust with clients by delivering on promises, maintaining 
          confidentiality, and conducting business with integrity and professionalism.
        </li>
        <li>
          <strong>5. Continuous Improvement:</strong> Commit to ongoing learning and development to enhance our 
          skills and adapt to evolving industry trends. Embrace feedback, reflect on experiences, 
          and proactively seek opportunities for growth and innovation to consistently deliver 
          value to our clients.
        </li>
      </ul>
    </div>
  );
};

export default PrincipleValues;
