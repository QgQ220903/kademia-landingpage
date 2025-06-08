import { FaTruckMoving, FaChartLine, FaGraduationCap } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";

export default function FeaturesSection() {
  const { theme } = useTheme();
  const [visibleItems, setVisibleItems] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <FaTruckMoving className="w-8 h-8" />,
      title: "Supply Chain Performance Consulting",
      description: "Optimize your supply chain operations with strategic consulting to enhance efficiency, reduce costs, and improve overall performance",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Digital Transformation & Data Analytics",
      description: "Drive innovation through comprehensive digital transformation strategies and advanced data analytics solutions",
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconBg: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Training & Upskilling",
      description: "Empower your workforce with targeted training programs on performance improvement tools and digital transformation",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconBg: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Animate items one by one
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
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
      className="py-20 px-4 bg-background transition-all duration-700 ease-in-out relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <h2 className="text-heading mb-6 text-foreground">
            Our Core{' '}
            <span className="relative inline-block">
              <span className="text-gradient bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent font-extrabold">
                Services
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl -z-10 animate-pulse-subtle" />
            </span>
          </h2>
          <p className="text-subheading text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We provide essential solutions to help your business grow smarter and faster
            through strategic consulting, digital innovation, and workforce development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="card-base h-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl group-hover:border-primary/30">

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.iconBg} border ${feature.borderColor} flex items-center justify-center mb-4 transition-all duration-500 group-hover:shadow-lg group-hover:scale-110`}>
                      <div className="text-primary transition-all duration-500 group-hover:scale-110">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Floating animation dots */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-foreground transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed transition-colors duration-300 group-hover:text-foreground/90">
                    {feature.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500" />

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>

              {/* Floating background element */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700 -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}