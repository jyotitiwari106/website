  import React, { useState } from 'react';
  import bg from '../assets/About/page-banner.jpg'
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-Time',
      description: 'React, Tailwind, and JavaScript experience required.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'Bangalore',
      type: 'Full-Time',
      description: 'Node.js, Express, MongoDB experience required.',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Part-Time',
      description: 'Figma, Adobe XD, Creative Thinking.',
    },
  ];

  const CareerPage = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
      <div className="min-h-screen">
        <div className="relative h-[450px]">
          <img src={bg} alt="Contact Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center">
          <h1 className="text-xl text-white md:text-3xl font-bold mb-4">Join Our Team</h1>
        
          </div>
          </div>
        {/* Hero Section */}
        <section className=" flex flex-col justify-center items-center pt-10 text-center">
          <p className="text-base md:text-lg max-w-2xl mx-auto font-bold text-blue-500">
            We're always looking for creative, talented self-starters to join our team.
          </p>
        </section>

        {/* Why Join Us */}
        <section className="py-10 px-6 bg-white">
          <h2 className="text-2xl font-bold text-center mb-10">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Flexible Work</h3>
              <p className='text-base'>Work from anywhere with a schedule that suits you.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Great Culture</h3>
              <p className='text-base'>A team that supports each other and grows together.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Learning & Growth</h3>
              <p className='text-base'>Opportunities to upskill and attend top conferences.</p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-6 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">Open Positions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded shadow flex justify-between items-start flex-col md:flex-row">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.location} • {job.type}</p>
                  <p className="mt-2 text-base">{job.description}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-lg text-white px-4 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  py-2 rounded hover:bg-blue-700"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Apply Modal */}
        {selectedJob && ( 
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center md:p-0 p-4">
            <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
              <h3 className="text-xl font-bold mb-4">Apply for {selectedJob.title}</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full text-base p-2 border rounded" />
                <input type="email" placeholder="Email" className="w-full text-base p-2 border rounded" />
                <input type="file" className="w-full p-2 border text-base rounded" />
                <textarea placeholder="Cover Letter" className="w-full text-base p-2 border rounded" rows="4" />
                <button type="submit" className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-4 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-base py-2 rounded hover:bg-blue-700">
                  Submit 
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default CareerPage;
