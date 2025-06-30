import React, { useState } from 'react';
import Opt from '../../assets/Services/hr2.png';
import Opt1 from '../../assets/Services/facilty2.png';
import Opt2 from '../../assets/Services/finance2.png';
import Opt3 from '../../assets/Services/inventory2.png';
import Opt4 from '../../assets/Services/legal2.png';
import Opt5 from '../../assets/Services/logistic2.png';
import Opt6 from '../../assets/Services/production2.png';

const tabs = ['OPERATIONS', 'SET UPS', 'AUTOMATION'];

const cards = [
  {
    title: 'Production',
    desc: 'Boost Automation and Simplify Your Production! Production is the silent engine powering your success, releasing you to focus on what truly matters that is growth.',
    img: Opt6,
    tab: 'OPERATIONS',
  },
  {
    title: 'Logistic & Dispatch',
    desc: 'Locate ideal logistics partners, assess delivery times, and manage dispatch and returns seamlessly. Monitor status efficiently with detailed reporting.',
    img: Opt5,
    tab: 'OPERATIONS',
  },
  {
    title: 'Inventory Management',
    desc: "Boost business efficiency and profitability using Ms Corpres Automation's Inventory Management. Prevent dead inventory, enhance warehouse organization...",
    img: Opt3,
    tab: 'OPERATIONS',
  },
  {
    title: 'Finance & Commercial',
    desc: 'Leverage Ms Corpres Automation for Finance & Commercial aid, delivering MIS and vital data. Ensure audit support, GST, Tax, and FEMA compliance...',
    img: Opt2,
    tab: 'OPERATIONS',
  },
  {
    title: 'Legal Compliance',
    desc: 'Ensure smooth legal operations with compliance checks, contract automation, and regulatory reporting to avoid penalties.',
    img: Opt4,
    tab: 'SET UPS',
  },
  {
    title: 'HR & Staffing',
    desc: 'Manage employee lifecycle from recruitment to payroll, streamline onboarding, and improve HR efficiency through automation.',
    img: Opt,
    tab: 'SET UPS',
  },
  {
    title: 'Facility Management',
    desc: 'Automate facility scheduling, resource allocation, and preventive maintenance with efficient facility management solutions.',
    img: Opt1,
    tab: 'AUTOMATION',
  },
  {
    title: 'Process Automation',
    desc: 'Identify repetitive tasks and automate business workflows with intelligent process automation tools.',
    img: Opt2,
    tab: 'AUTOMATION',
  },
];

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState('OPERATIONS');

  return (
    <div className="p-6 md:p-12">
      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full border transition-all ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards
          .filter((card) => card.tab === activeTab)
          .map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden border group hover:shadow-lg transition"
            >
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
                <button className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                  Read More →
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
