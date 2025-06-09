import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaCogs, FaCloud, FaMobileAlt } from "react-icons/fa";

export default function ProductFeatureSection() {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: t("product.features.items.feature1.title"),
      description: t("product.features.items.feature1.description"),
    },
    {
      icon: <FaCloud className="w-6 h-6" />,
      title: t("product.features.items.feature2.title"),
      description: t("product.features.items.feature2.description"),
    },
    {
      icon: <FaMobileAlt className="w-6 h-6" />,
      title: t("product.features.items.feature3.title"),
      description: t("product.features.items.feature3.description"),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-opacity duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            {t("product.features.title")}{" "}
            <span className="text-primary">{t("product.features.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t("product.features.subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`card-base p-6 transition-all duration-300 hover:shadow-md ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="icon-container mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}