import React, { useState, useEffect, useRef } from "react";
import { FiUsers, FiAward, FiGlobe, FiTrendingUp } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";

const CoreValues = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const values = [
    {
      icon: <FiUsers className="w-5 h-5" />,
      title: "Customer Centricity",
      description: "Our solutions are designed with the customer at the heart of everything we do."
    },
    {
      icon: <FiAward className="w-5 h-5" />,
      title: "Exceptional Quality",
      description: "We are committed to delivering the highest standards in every product and service."
    },
    {
      icon: <FiTrendingUp className="w-5 h-5" />,
      title: "Continuous Innovation",
      description: "We embrace change and consistently adopt the latest technologies to stay ahead."
    },
    {
      icon: <FiGlobe className="w-5 h-5" />,
      title: "Global Mindset",
      description: "Our solutions meet international standards and are built for global integration."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Fundamental principles that guide our decisions and actions, ensuring we deliver exceptional
            results while maintaining the highest ethical standards.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className={`card-base p-6 transition-all duration-300 hover:shadow-md ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="icon-container mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;