import React, { useState, useEffect } from 'react';
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from 'react-i18next';

const CtaSection = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-foreground transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('cta.title.start')} <span className="text-primary">{t('cta.title.highlight')}</span>
        </h2>

        {/* Description */}
        <p className={`text-lg text-foreground/80 mb-8 mx-auto transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t('cta.description')}
        </p>

        {/* CTA Button */}
        <div className={`transition-opacity duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="/contact"
            className="btn-base btn-primary btn-lg inline-flex items-center gap-2 group"
          >
            {t('cta.button')}
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
