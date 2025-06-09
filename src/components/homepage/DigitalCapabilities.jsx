import { FiCpu, FiDatabase, FiCloud, FiCode } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

export default function DigitalCapabilities() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const capabilities = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: t('capabilities.items.lowCode.title'),
      description: t('capabilities.items.lowCode.description'),
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: t('capabilities.items.analytics.title'),
      description: t('capabilities.items.analytics.description'),
    },
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: t('capabilities.items.cloud.title'),
      description: t('capabilities.items.cloud.description'),
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: t('capabilities.items.automation.title'),
      description: t('capabilities.items.automation.description'),
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
      className="py-16 px-4 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            {t('capabilities.title')}{' '}
            <span className="text-primary">{t('capabilities.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('capabilities.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
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
}