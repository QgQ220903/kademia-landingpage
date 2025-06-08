import React, { useState, useEffect } from 'react';
import { useTheme } from "../../contexts/ThemeContext";

const CtaSection = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-background transition-all duration-700 ease-in-out">
      {/* Dynamic Background */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        {/* Interactive gradient background */}
        <div
          className="absolute inset-0 opacity-70 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, transparent 50%), 
                        radial-gradient(circle at 30% 70%, hsl(var(--primary) / 0.1) 0%, transparent 50%), 
                        radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.08) 0%, transparent 50%)`
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-primary/20 rounded-full animate-float transition-all duration-700`}
              style={{
                left: `${15 + i * 25}%`,
                top: `${20 + (i % 2) * 60}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${5 + i * 1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`relative max-w-4xl mx-auto z-10 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Heading with gradient text */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Ready to{' '}
          <span className="relative inline-block">
            <span className="text-gradient bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Transform
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl -z-10 animate-pulse-subtle" />
          </span>{' '}
          Your Business?
        </h2>

        {/* Description */}
        <p className={`text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Contact our team today for a personalized consultation and discover the perfect solution tailored for your enterprise.
        </p>

        {/* CTA Button with enhanced effects */}
        <div className={`transition-all duration-700 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="/contact"
            className="btn-base btn-primary btn-lg group relative overflow-hidden inline-flex items-center px-8 py-4"
          >
            <span className="relative z-10 flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
              Get in Touch
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />

            {/* Ripple effect */}
            <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-active:scale-100 transition-transform duration-200" />
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-16 w-12 h-12 border border-primary/15 rounded-lg rotate-45 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-20 w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default CtaSection;