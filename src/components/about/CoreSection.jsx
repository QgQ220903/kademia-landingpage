import React from 'react';
import { FiUsers, FiAward, FiGlobe, FiTrendingUp } from "react-icons/fi";

const CoreSection = () => {
  return (
    <>
      {/* Introduction Section */}
      <section className="relative py-55 px-6 bg-gradient-to-b from-dark to-dark-light text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="text-blue-600">Kademia</span>
          </h1>
          <p className="text-lg md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            A pioneer in digital transformation and automation solutions for modern enterprises.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-30 px-6 bg-dark text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
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
            ].map((value, index) => (
              <div key={index} className="bg-blue-900 p-8 rounded-xl hover:translate-y-2 transition">
                <div className={`${value.color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact our team today for a personalized consultation and discover the perfect solution tailored for your enterprise.
          </p>
          <a
            href="/contact"
            className="primary-button text-dark px-10 py-5 rounded-xl font-semibold hover:bg-blue-900 transition text-lg shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default CoreSection;
