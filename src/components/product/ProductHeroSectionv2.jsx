import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import jabil1 from "../../assets/images/jabil1.jpg";
import jabil2 from "../../assets/images/jabil2.jpg";
import jabil3 from "../../assets/images/jabil3.jpg";
import wahl1 from "../../assets/images/wahl1.jpg";
import wahl2 from "../../assets/images/wahl2.jpg";
import wahl3 from "../../assets/images/wahl3.jpg";

const defaultSlides = [
  {
    images: [jabil1, jabil2, jabil3],
    titleKey: "product.hero.slides.powerApp.title",
    subtitleKey: "product.hero.slides.powerApp.subtitle",
    descriptionKey: "product.hero.slides.powerApp.description",
    link: "#power-app",
    buttonTextKey: "product.hero.slides.powerApp.button"
  },
  {
    images: [wahl1, wahl2, wahl3],
    titleKey: "product.hero.slides.powerBI.title",
    subtitleKey: "product.hero.slides.powerBI.subtitle",
    descriptionKey: "product.hero.slides.powerBI.description",
    link: "#power-bi",
    buttonTextKey: "product.hero.slides.powerBI.button"
  },
];

export default function ProductHeroSection({ slides = defaultSlides }) {
  const [current, setCurrent] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const { images, titleKey, subtitleKey, descriptionKey, link, buttonTextKey } = slides[current];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setCurrentImageIndex(0);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto slide images within current slide
  useEffect(() => {
    if (isPaused) return;

    const imageTimer = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(imageTimer);
  }, [currentImageIndex, isPaused, images.length]);

  // Auto change slides
  useEffect(() => {
    if (isPaused) return;

    const slideTimer = setInterval(() => {
      nextSlide();
    }, 12000);

    return () => clearInterval(slideTimer);
  }, [current, isPaused]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section
        className="relative min-h-screen flex items-center justify-center py-30 px-4 sm:px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary)/0.05) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary)/0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-7xl w-full mx-auto z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Image Gallery Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative">
              <div className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-lg group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />

                {/* Main Image */}
                <img
                  src={images[currentImageIndex]}
                  alt={`${t(titleKey)} - ${currentImageIndex + 1}`}
                  className="w-full h-80 sm:h-96 lg:h-[32rem] object-cover transition-all duration-500 ease-in-out"
                  key={`${current}-${currentImageIndex}`}
                />

                {/* Image Thumbnails */}
                <div className="absolute bottom-20 left-0 right-0 z-20 px-4">
                  <div className="flex justify-center gap-3">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative overflow-hidden rounded-md transition-all duration-300 transform ${currentImageIndex === index
                          ? 'ring-2 ring-white scale-110 shadow-md'
                          : 'opacity-80 hover:opacity-100 hover:scale-105'
                          }`}
                      >
                        <img
                          src={img}
                          alt={`${t(titleKey)} thumbnail ${index + 1}`}
                          className="w-14 h-14 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-0 right-0 z-20 px-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium bg-primary/90 text-white px-3 py-1 rounded-full">
                      {current + 1} / {slides.length}
                    </span>
                    <span className="text-sm font-medium bg-black/40 text-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
                      {t(subtitleKey)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <div className="space-y-5 max-w-lg">
                <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                  {t(subtitleKey)}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
                  {t(titleKey)}
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t(descriptionKey)}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href={link}
                  className="btn-base btn-primary btn-lg group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    {t(buttonTextKey)}
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>

                <a
                  href="#features"
                  className="btn-base btn-secondary btn-lg hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300"
                >
                  {t('product.hero.controls.details')}
                </a>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-6 mt-6">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300"
                  aria-label={t('product.hero.controls.prevSlide')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrent(index);
                        setCurrentImageIndex(0);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${current === index
                        ? "bg-primary w-6"
                        : "bg-foreground/20 w-3 hover:bg-foreground/40"
                        }`}
                      aria-label={`${t('product.hero.controls.goToSlide')} ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors duration-300"
                  aria-label={t('product.hero.controls.nextSlide')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Auto-play Status */}
              <div className="flex items-center gap-2 text-sm text-foreground/60 mt-2">
                <div className="flex gap-1.5">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${currentImageIndex === index
                        ? 'bg-primary w-4'
                        : 'bg-foreground/20 w-2'
                        }`}
                    />
                  ))}
                </div>
                <span className="text-xs">{isPaused ? 'Paused' : 'Auto-playing'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-16 h-16 border border-primary/10 rounded-full hidden lg:block" />
        <div className="absolute bottom-1/3 right-12 w-12 h-12 border border-primary/10 rounded-lg rotate-45 hidden lg:block" />
      </section>
    </div>
  );
}