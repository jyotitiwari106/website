import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none transition-all duration-300 hover:bg-gray-50"
    >
      <span className="text-lg font-semibold">{title}</span>
      <span className="text-2xl font-bold text-blue-500">
        {isOpen ? '–' : '+'}
      </span>
    </button>
    {isOpen && (
      <div className="px-6 pb-4 text-gray-600 transition-all duration-300">
        {content}
      </div>
    )}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'What is Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework for building custom designs.',
    },
    {
      title: 'Why use Accordion?',
      content: 'Accordions help manage content in a compact and interactive way.',
    },
  ];

  return (
    <div className="pt-10 px-4">
      <p className="text-blue-500 font-semibold text-center pt-5">FAQs</p>
      <h4 className="text-2xl font-bold mb-4 text-center">Frequently asked questions</h4>

      <div className="max-w-6xl mx-auto mt-10 bg-white shadow-md rounded-xl overflow-hidden">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
