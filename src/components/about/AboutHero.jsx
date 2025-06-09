import { useState, useEffect } from 'react';
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from 'react-i18next';

export default function AboutHero() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Animate elements on mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center text-center py-40 px-4 overflow-hidden bg-background transition-all duration-700 ease-in-out">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className={`relative max-w-6xl mx-auto z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

        {/* Main Heading */}
        <h1 className="text-display mb-6 text-foreground">
          {t('about.hero.title')} <span className='text-display mb-6 text-primary'>{t('about.hero.titleHighlight')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-subheading text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          {t('about.hero.subtitle')}
        </p>

      </div>

      {/* Simple Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full" />
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-primary/15 rounded-lg rotate-45" />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary/40 rounded-full" />
      <div className="absolute bottom-1/4 left-20 w-1 h-1 bg-primary/60 rounded-full" />
    </section>
  );
}