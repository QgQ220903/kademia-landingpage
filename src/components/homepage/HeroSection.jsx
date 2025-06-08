import { useState, useEffect } from 'react';
import { useTheme } from "../../contexts/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Animate elements on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Track mouse position for interactive background
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
    <section className="relative min-h-screen flex items-center justify-center text-center py-40 px-4 overflow-hidden bg-background transition-all duration-700 ease-in-out">
      {/* Dynamic Background with Theme-aware Gradients */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        {/* Primary gradient background */}
        <div
          className="absolute inset-0 opacity-60 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, transparent 50%), 
                        radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%), 
                        radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.08) 0%, transparent 50%)`
          }}
        />

        {/* Animated floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-float transition-all duration-700`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 transition-opacity duration-700"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className={`relative max-w-6xl mx-auto z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

        {/* Main Heading */}
        <h1 className={`text-display mb-6 text-foreground transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          Modern{' '}
          <span className="relative inline-block">
            <span className="text-gradient bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent font-extrabold">
              Technology
            </span>
            {/* Glow effect for the gradient text */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-2xl -z-10 animate-pulse-subtle" />
          </span>{' '}
          Solutions for Businesses
        </h1>

        {/* Subtitle */}
        <p className={`text-subheading text-foreground mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          Elevate your business with high-performance, cost-effective, and optimized technology solutions
          that drive innovation and growth in the digital age.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <a
            href="/contact"
            className="btn-base btn-secondary btn-lg group relative overflow-hidden"
          >
            <span className="relative z-10 transition-colors duration-300">Contact Us</span>
            {/* Hover background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
          </a>

          <a
            href="#features"
            className="btn-base btn-primary btn-lg group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
              Explore Features
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
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-active:scale-100 transition-transform duration-200" />
          </a>
        </div>

        {/* Stats or badges */}
        <div className={`mt-16 flex flex-wrap justify-center gap-8 text-sm transition-all duration-700 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '99%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:bg-card/70 hover:border-primary/30"
            >
              <span className="text-2xl font-bold text-primary">{stat.number}</span>
              <span className="text-foreground/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-primary/15 rounded-lg rotate-45 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-20 w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
    </section>
  );
}