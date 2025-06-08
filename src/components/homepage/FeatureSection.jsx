import { FaTruckMoving, FaChartLine, FaGraduationCap } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function FeaturesSection() {
  const { theme } = useTheme();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <FaTruckMoving className="w-6 h-6" />,
      title: "Supply Chain Performance Consulting",
      description: "Optimize your supply chain operations with strategic consulting to enhance efficiency, reduce costs, and improve overall performance",
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Digital Transformation & Data Analytics",
      description: "Drive innovation through comprehensive digital transformation strategies and advanced data analytics solutions",
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Training & Upskilling",
      description: "Empower your workforce with targeted training programs on performance improvement tools and digital transformation",
    },
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
      id="features"
      className="py-16 px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Our Core <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We provide essential solutions to help your business grow smarter and faster
            through strategic consulting, digital innovation, and workforce development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-base p-6 transition-all duration-300 hover:shadow-md ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="icon-container mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}