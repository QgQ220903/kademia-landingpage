import React from 'react';
import ValueCard from './ValueCard';
import { FiUsers, FiAward, FiGlobe, FiTrendingUp } from "react-icons/fi";

const CoreValues = () => {
  const values = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Customer Centricity",
      desc: "Our solutions are designed with the customer at the heart of everything we do."
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Exceptional Quality",
      desc: "We are committed to delivering the highest standards in every product and service."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Continuous Innovation",
      desc: "We embrace change and consistently adopt the latest technologies to stay ahead."
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Global Mindset",
      desc: "Our solutions meet international standards and are built for global integration."
    }
  ];

  return (
    <section className="gradient-section py-20 px-6">
      <div className="container-custom">
        <h2 className="text-heading text-center text-primary mb-16">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;