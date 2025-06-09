import { FaTruckMoving, FaChartLine, FaGraduationCap } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from 'react-i18next';

export default function FeaturesSection() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <FaTruckMoving className="w-6 h-6" />,
      title: t('features.items.supplyChain.title'),
      description: t('features.items.supplyChain.description'),
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: t('features.items.digital.title'),
      description: t('features.items.digital.description'),
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: t('features.items.training.title'),
      description: t('features.items.training.description'),
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
            {t('features.title')}{' '}
            <span className="text-primary">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('features.subtitle')}
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