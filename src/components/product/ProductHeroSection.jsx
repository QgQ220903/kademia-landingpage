import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

// Updated slides with your requested content
const defaultSlides = [
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    title: "Power App Development",
    subtitle: "Jabil 2024 Training Program",
    description: "Master Power App development with our comprehensive course designed for Jabil's 2024 digital transformation. Learn to build custom business applications with no-code/low-code solutions.",
    link: "#power-app",
    buttonText: "Start Learning"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    title: "Power BI Analytics",
    subtitle: "Wahl 2025 Certification",
    description: "Advanced Power BI training for Wahl's 2025 data strategy. Transform raw data into powerful insights with interactive dashboards and business intelligence tools.",
    link: "#power-bi",
    buttonText: "View Curriculum"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    title: "Microsoft 365 Integration",
    subtitle: "Future-Ready Solutions",
    description: "Learn to integrate Power Platform with Microsoft 365 ecosystem for seamless workflow automation and productivity enhancement across your organization.",
    link: "#m365-integration",
    buttonText: "Explore Integration"
  }
];

export default function ProductHeroSection({ slides = defaultSlides }) {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { theme } = useTheme();

  const { image, title, subtitle, description, link, buttonText } = slides[current];

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Auto-advance slides every 12 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 12000);

    return () => clearInterval(timer);
  }, [current, isPaused]);

  return (
    <section
      className={`hero-gradient ${theme === 'dark' ? 'hero-background-dark-subtle' : 'hero-background-light-subtle'} relative min-h-screen flex items-center justify-center py-20 overflow-hidden`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Pattern Overlay */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'pattern-overlay-dark' : 'pattern-overlay-light'}`} />

      {/* Animated Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-16 h-16 border-2 border-primary/20 rounded-full animate-pulse hidden md:block" />
      <div className="absolute bottom-1/3 right-12 w-12 h-12 border-2 border-primary/15 rounded-lg rotate-45 animate-pulse delay-300 hidden md:block" />
      <div className="absolute top-1/2 right-8 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-700 hidden md:block" />
      <div className="absolute bottom-1/4 left-16 w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-1000 hidden md:block" />

      {/* Floating Tech Icons */}
      <div className="absolute top-20 right-20 opacity-10 md:opacity-20">
        <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 md:opacity-20">
        <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12l8-8V4l-8 8-8-8H4l8 8-8 8v1.8l8-8 8 8V20l-8-8z" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 px-4">
        <div className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Image Section - Enhanced with floating effect */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative group">
              <div className="card-base cursor-pointer overflow-hidden max-w-md lg:max-w-xl w-full transition-all duration-500 hover:shadow-xl">
                <div className="relative">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 rounded-xl" />

                  <img
                    src={image}
                    alt={title}
                    className="w-full h-80 lg:h-[28rem] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay info */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="text-white flex justify-between items-end">
                      <div>
                        <span className="text-sm font-medium bg-primary/90 px-2 py-1 rounded-md">
                          {current + 1} / {slides.length}
                        </span>
                      </div>
                      <div className="text-xs font-medium opacity-90 bg-black/40 px-2 py-1 rounded-md">
                        {subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Improved typography */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {subtitle}
                  </span>
                </div>

                <h1 className="text-display text-foreground leading-tight">
                  {title}
                </h1>

                <p className="text-subheading text-foreground/80 max-w-2xl lg:text-lg">
                  {description}
                </p>
              </div>

              {/* Action Buttons - Enhanced */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href={link}
                  className="btn-base btn-primary btn-lg flex items-center justify-center gap-2"
                >
                  <span>{buttonText}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  href="#features"
                  className="btn-base btn-secondary btn-lg flex items-center justify-center gap-2"
                >
                  <span>Course Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </div>

              {/* Navigation Controls - Enhanced */}
              <div className="flex flex-col items-center lg:items-start w-full mt-8 space-y-4">
                {/* Progress Bar - More visible */}
                <div className="w-full max-w-xs lg:max-w-sm">
                  <div className="h-1.5 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${((current + 1) / slides.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <button
                    onClick={prevSlide}
                    className="icon-container hover:scale-110 transition-transform duration-200 hover:bg-primary/20"
                    aria-label="Previous slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Slide Indicators - Modern dots */}
                  <div className="flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${current === index
                          ? "bg-primary w-8"
                          : "bg-foreground/20 w-3 hover:bg-foreground/40"
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="icon-container hover:scale-110 transition-transform duration-200 hover:bg-primary/20"
                    aria-label="Next slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}