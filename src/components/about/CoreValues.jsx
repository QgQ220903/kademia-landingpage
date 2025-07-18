import React, { useState, useEffect, useRef } from "react";
import { FiUsers, FiAward, FiGlobe, FiTrendingUp } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const iconMap = {
  users: <FiUsers className="w-5 h-5" />,
  award: <FiAward className="w-5 h-5" />,
  "trending-up": <FiTrendingUp className="w-5 h-5" />,
  globe: <FiGlobe className="w-5 h-5" />,
};

const CoreValues = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  // Lấy danh sách giá trị cốt lõi từ i18n
  const values = t("about.coreValues.items", { returnObjects: true });

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
            {t("about.coreValues.title.start")}{' '}
            <span className="text-primary font-bold">
              {t("about.coreValues.title.highlight")}
            </span>
          </h2>
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
                {iconMap[item.icon]}
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