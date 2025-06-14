import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Animate elements on mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section className="relative min-h-screen flex items-center justify-center text-center py-20 px-4">
        {/* Simple Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Main Content */}
        <div className={`relative max-w-4xl mx-auto z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>

          {/* Main Heading */}
          <h1 className="text-display mb-6 text-foreground">
            {t('hero.title.start')}{' '}
            <span className="text-primary font-bold">
              {t('hero.title.highlight')} {' '}
            </span>
            <span className=''>{t('hero.title.end')}</span>

          </h1>

          {/* Subtitle */}
          <p className="text-subheading text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-base btn-secondary btn-lg group"
            >
              <span className="relative z-10">{t('hero.cta.contact')}</span>
            </a>

            <a
              href="#features"
              className="btn-base btn-primary btn-lg group"
            >
              <span className="flex items-center gap-2">
                {t('hero.cta.explore')}
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Simple Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-16 h-16 border-2 border-primary/20 rounded-full" />
        <div className="absolute bottom-1/3 right-12 w-12 h-12 border-2 border-primary/15 rounded-lg rotate-45" />
        <div className="absolute top-1/2 right-8 w-2 h-2 bg-primary/40 rounded-full" />
        <div className="absolute bottom-1/4 left-16 w-1 h-1 bg-primary/60 rounded-full" />
      </section>
    </div>
  );
}