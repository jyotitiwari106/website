import React from 'react';

const plans = [
  {
    name: 'Free',
    price: 0,
    features: ['Community Support', 'Dedicated Tech Experts', 'Unlimited Storage', 'Custom Domains'],
    highlighted: false,
  },
  {
    name: 'Starter',
    price: 10,
    features: ['Community Support', 'Dedicated Tech Experts', 'Unlimited Storage', 'Custom Domains'],
    highlighted: true,
  },
  {
    name: 'Pro',
    price: 30,
    features: ['Community Support', 'Dedicated Tech Experts', 'Unlimited Storage', 'Custom Domains'],
    highlighted: false,
  },
];

const PricingCard = () => {
  return (
    <div className="flex justify-center items-start gap-6 py-16 bg-white px-4">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`w-full max-w-xs rounded-xl shadow-md p-8 flex flex-col items-center ${
            plan.highlighted
              ? 'bg-gradient-to-b from-blue-400 to-purple-600 text-white scale-105 transition-transform duration-300'
              : 'bg-gray-100'
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
          <div className="text-5xl font-bold flex items-end mb-4">
            <span className="text-2xl">$</span>
            <span>{plan.price}</span>
            <span className="text-base font-medium text-gray-500 ml-1">/Month</span>
          </div>
          <ul className={`text-center text-sm flex flex-col gap-3 mb-6 ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button
            className={`mt-auto w-full py-3 rounded-md font-semibold shadow-md ${
              plan.highlighted
                ? 'bg-white text-blue-600 hover:bg-gray-100'
                : 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90'
            }`}
          >
            Try It Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
