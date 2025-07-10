import React from 'react';
import training from '../../assets/Training/image.png'
const SummerTraining = () => {
  // Header button texts
  const navItems = [
  { label: 'About Summer Training', id: 'about' },
  { label: 'Offered Languages', id: 'offered' },
  { label: 'Who Can Join?', id: 'who' },
  { label: 'How Can Join?', id: 'how' },
  { label: 'Why Choose Us?', id: 'why' },
  { label: 'Additional Benefits', id: 'benefits' },
  { label: 'Popular FAQs', id: 'faqs' }
];


  // Offered sessions
  const sessions = [
    { title: '1. BASIC SESSION', desc: 'HTML-5, CSS-3' },
    { title: '2. TECHNOLOGY SESSION', desc: 'Python with Django, ReactJS etc.' },
    { title: '3. PROJECT SESSION', desc: 'Major project with 20+ modules' }
  ];


  const cities = ['Delhi', 'Lucknow', 'Noida', 'Kanpur', 'Agra'];

  const eligibleCourses = ['Diploma in CS/IT', 'B.Sc/BCA', 'B.Tech in CS/IT', 'MCA'];

  const benefits = [
    '5 hours Daily Classes',
    'Study Material of each language',
    'Free Web Hosting for 1 Year',
    'Project file according to project',
    'Recording Class for each Session',
    'Free access of online portal for 1 Year',
    'Free Java classes for 1 Year',
    'Hostel and Room Guidance'
  ];

  const faqs = [
    'Is prior programming experience required to join the Summer Training program?',
    'Are there any internship opportunities after completing the Summer Training program?',
    'Is there any provision for financial assistance or scholarships for this training?',
    'Will I receive any support or guidance in building advanced technology projects?',
    'Will I have access to course materials and live recordings after the training ends?',
    'Are industry networking opportunities or industry exposure during training available?',
    'Will I receive a certificate upon completion of this program?',
    'Is accommodation provided for participants coming from out of town?',
    'Can this training be held online?',
    'Is Offline Training better than Online Training?'
  ];

  const reasons = [
    'We are the highest reviewed Summer/Project Training company on Google',
    'Top-class infrastructure and facilities',
    'Real project-based training with industry experts',
    'Dedicated placement assistance',
    'More than 15000+ students already trained',
    'Option for offline & online classes',
    'Scholarship & referral discounts available',
    '100% practical training + doubt sessions'
  ];
  return (
    <section className="bg-blue-50 text-gray-800 py-12 px-4 md:px-20 pt-20">
      {/* HEADER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={()=>{
              const section=document.getElementById(item.id);
              section?.scrollIntoView({behavior:'smooth'});
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* MAIN HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        <span className="text-blue-600">Summer</span> Training - CS/IT (4/6 WEEKS)
      </h2>
      <p className="text-center text-lg text-gray-600 mb-10">
        Summer Training in Computer Science/Information Technology at SkillForge Technologies
      </p>

      {/* IMAGE AND ABOUT SECTION */}
      <div id="about" className="flex flex-col lg:flex-row gap-10 items-center">
        <img
          src={training}
          alt="Training"
          className="w-full lg:w-1/2 rounded shadow-lg"
        />
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-600 inline-block">
            About the Program
          </h3>
          <p className="mb-4">
            Summer Training in CS/IT is an intensive and hands-on technology learning program
            dedicated for Computer Science(CS) and Information Technology(IT) students of B.Tech &
            Diploma, also beneficial for BCA/MCA and affiliated branches.
          </p>
          <p className="mb-6">
            The Program is tailored to equip participants with practical skills and industry-relevant
            knowledge which bridges the gap between academic learning and industry requirements,
            empowering students with real-world experience.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Register Now
          </button>
        </div>
      </div>

      {/* OFFERED SESSIONS */}
      <div id="offered" className="mt-16">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Offered Languages and Technology ofSkillForge Technologies Summer Training
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessions.map((session, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded shadow hover:shadow-md border-t-4 border-blue-600"
            >
              <h4 className="text-xl font-semibold mb-2">{session.title}</h4>
              <p className="text-gray-600">{session.desc}</p>
            </div>
          ))}
        </div>
      </div>
       <section className="px-6 py-10 bg-blue-100">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Program Tenure & Training</h2>
        <p className="mb-4 text-sm">
          This training program is conducted by industry experts and is designed for students who want to gain real project exposure during summer vacations...
        </p>
        <h3 className="text-lg font-semibold text-blue-600">How to Join?</h3>
        <div className="flex flex-wrap gap-2 my-4">
          {cities.map((city) => (
            <button key={city} className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700">
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* Who Can Join */}
      <section id="who"  className="px-6 py-8 bg-white">
        <h3 className="text-lg font-bold text-blue-700 mb-2">Who Can Join?</h3>
        <ul className="list-disc ml-6 space-y-1 text-sm">
          {eligibleCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      {/* Additional Benefits */}
      <section  id="why" className="bg-blue-50 py-10 px-6">
        <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">Additional Benefits</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">{String(index + 1).padStart(2, '0')}</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="benefits" className="bg-blue-600 py-10 px-6 text-white">
        <h3 className="text-2xl font-bold text-center mb-6">Popular FAQs</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-blue-500 p-4 rounded">{faq}</div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 px-6 py-12">
        <h3 className="text-center text-xl font-bold text-blue-700 mb-8">Why SkillForge Technologies / Why choose us?</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-4 border-l-4 border-blue-600 shadow-sm">{reason}</div>
          ))}
        </div>
      </section>

      {/* Enroll */}
      <section id="faqs" className="text-center py-10 bg-blue-100">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">Join SkillForge Technologies Summer Training Program</h3>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium">
          GET ENROLL NOW
        </button>
      </section>
    </section>
  );
};

export default SummerTraining;
