import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

export default function ProductHeroSection() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center py-20 px-4 bg-background">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className={`relative max-w-4xl mx-auto z-10 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <h1 className="text-display mb-6 text-foreground">
          {t("product.hero.title.start")}{" "}
          <span className="text-primary font-bold">{t("product.hero.title.highlight")}</span>{" "}
          {t("product.hero.title.end")}
        </h1>
        <p className="text-subheading text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t("product.hero.subtitle")}
        </p>
      </div>
      {/* Decorative elements giống HeroSection */}
      <div className="absolute top-1/4 left-8 w-16 h-16 border-2 border-primary/20 rounded-full" />
      <div className="absolute bottom-1/3 right-12 w-12 h-12 border-2 border-primary/15 rounded-lg rotate-45" />
      <div className="absolute top-1/2 right-8 w-2 h-2 bg-primary/40 rounded-full" />
      <div className="absolute bottom-1/4 left-16 w-1 h-1 bg-primary/60 rounded-full" />
    </section>
  );
}