import { useState, useEffect } from 'react';
import { useTheme } from "../../contexts/ThemeContext";

export default function AboutHero() {
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
    <section className="relative min-h-[100vh] flex items-center justify-center text-center py-40 px-4 overflow-hidden bg-background transition-all duration-700 ease-in-out">
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
      <div className={`relative max-w-6xl mx-auto z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Main Heading */}
        <h1 className={`text-display mb-6 text-foreground transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          About{' '}
          <span className="relative inline-block">
            <span className="text-gradient bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent font-extrabold">
              Kademia
            </span>
            {/* Glow effect for the gradient text */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-2xl -z-10 animate-pulse-subtle" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-subheading text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Kademia is a premier partner providing consulting and training services in digital transformation for businesses. We specialize in optimizing processes, enhancing efficiency, integrating new technologies, and leveraging workforce skills to ensure sustainable growth for companies in the digital age.
        </p>




      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-primary/15 rounded-lg rotate-45 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-20 w-1 h-1 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
    </section>
  );
}