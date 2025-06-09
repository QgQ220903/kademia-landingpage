import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaRobot, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function FeaturedProductsSection() {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const products = [
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: t("product.featured.items.product1.title"),
      description: t("product.featured.items.product1.description"),
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: t("product.featured.items.product2.title"),
      description: t("product.featured.items.product2.description"),
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: t("product.featured.items.product3.title"),
      description: t("product.featured.items.product3.description"),
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
            {t("product.featured.title")}{" "}
            <span className="text-primary">{t("product.featured.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t("product.featured.subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`card-base p-6 transition-all duration-300 hover:shadow-md ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="icon-container mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{product.title}</h3>
              <p className="text-foreground/70">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}