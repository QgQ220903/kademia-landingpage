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
    images: [
      jabil1,
      jabil2,
      jabil3
    ],
    titleKey: "product.hero.slides.powerApp.title",
    subtitleKey: "product.hero.slides.powerApp.subtitle",
    descriptionKey: "product.hero.slides.powerApp.description",
    link: "#power-app",
    buttonTextKey: "product.hero.slides.powerApp.button"
  },
  {
    images: [
      wahl1,
      wahl2,
      wahl3
    ],
    titleKey: "product.hero.slides.powerBI.title",
    subtitleKey: "product.hero.slides.powerBI.subtitle",
    descriptionKey: "product.hero.slides.powerBI.description",
    link: "#power-bi",
    buttonTextKey: "product.hero.slides.powerBI.button"
  },
  {
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    ],
    titleKey: "product.hero.slides.m365.title",
    subtitleKey: "product.hero.slides.m365.subtitle",
    descriptionKey: "product.hero.slides.m365.description",
    link: "#m365-integration",
    buttonTextKey: "product.hero.slides.m365.button"
  }
];

export default function ProductHeroSection({ slides = defaultSlides }) {
  const [current, setCurrent] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Auto slide images within current slide
  useEffect(() => {
    if (isPaused) return;

    const imageTimer = setInterval(() => {
      nextImage();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageTimer);
  }, [currentImageIndex, isPaused, images.length]);

  // Auto change slides
  useEffect(() => {
    if (isPaused) return;

    const slideTimer = setInterval(() => {
      nextSlide();
    }, 12000); // Change slide every 12 seconds

    return () => clearInterval(slideTimer);
  }, [current, isPaused]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section
        className="relative min-h-screen flex items-center justify-center py-20 px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Pattern */}
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
        <div className={`relative max-w-6xl mx-auto z-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative group">
              <div className="card-base cursor-pointer overflow-hidden max-w-md lg:max-w-xl w-full transition-all duration-500 hover:shadow-md">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 rounded-lg" />

                  {/* Main Image Display */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={images[currentImageIndex]}
                      alt={`${t(titleKey)} - ${currentImageIndex + 1}`}
                      className="w-full h-80 lg:h-[28rem] object-cover transition-all duration-700 group-hover:scale-105"
                      key={`${current}-${currentImageIndex}`}
                    />
                  </div>

                  {/* Image Thumbnails */}
                  <div className="absolute bottom-20 left-4 right-4 z-20">
                    <div className="flex gap-2 justify-center">
                      {images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative overflow-hidden rounded-md transition-all duration-300 ${currentImageIndex === index
                            ? 'ring-2 ring-white/80 scale-110'
                            : 'opacity-70 hover:opacity-100'
                            }`}
                        >
                          <img
                            src={img}
                            alt={`${t(titleKey)} thumbnail ${index + 1}`}
                            className="w-12 h-12 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Progress Indicator */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-black/40 text-white text-xs px-2 py-1 rounded-md">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="text-white flex justify-between items-end">
                      <span className="text-sm font-medium bg-primary/90 px-2 py-1 rounded-md">
                        {current + 1} / {slides.length}
                      </span>
                      <span className="text-xs font-medium opacity-90 bg-black/40 px-2 py-1 rounded-md">
                        {t(subtitleKey)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t(subtitleKey)}
                </span>
                <h1 className="text-display text-foreground">
                  {t(titleKey)}
                </h1>
                <p className="text-subheading text-foreground/80 max-w-2xl">
                  {t(descriptionKey)}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={link}
                  className="btn-base btn-primary btn-lg group"
                >
                  <span className="flex items-center gap-2">
                    {t(buttonTextKey)}
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

                <a
                  href="#features"
                  className="btn-base btn-secondary btn-lg"
                >
                  {t('product.hero.controls.details')}
                </a>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-6 mt-8">
                <button
                  onClick={prevSlide}
                  className="icon-container hover:scale-110 transition-transform duration-200"
                  aria-label={t('product.hero.controls.prevSlide')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        ? "bg-primary w-8"
                        : "bg-foreground/20 w-2 hover:bg-foreground/40"
                        }`}
                      aria-label={`${t('product.hero.controls.goToSlide')} ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="icon-container hover:scale-110 transition-transform duration-200"
                  aria-label={t('product.hero.controls.nextSlide')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Image Auto-Play Indicator */}
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <div className="flex gap-1">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 w-6 rounded-full transition-all duration-300 ${currentImageIndex === index
                        ? 'bg-primary'
                        : 'bg-foreground/20'
                        }`}
                    />
                  ))}
                </div>
                <span className="text-xs">Auto-play</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-8 w-16 h-16 border-2 border-primary/20 rounded-full" />
        <div className="absolute bottom-1/3 right-12 w-12 h-12 border-2 border-primary/15 rounded-lg rotate-45" />
        <div className="absolute top-1/2 right-8 w-2 h-2 bg-primary/40 rounded-full" />
        <div className="absolute bottom-1/4 left-16 w-1 h-1 bg-primary/60 rounded-full" />
      </section>
    </div>
  );
}