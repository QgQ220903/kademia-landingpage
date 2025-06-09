import { useTranslation } from "react-i18next";

export default function ProductCtaSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("product.cta.title.start")}{" "}
          <span className="text-primary">{t("product.cta.title.highlight")}</span>
        </h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          {t("product.cta.description")}
        </p>
        <div className="flex justify-center">
          <a href="/contact" className="btn-base btn-primary btn-lg">
            {t("product.cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
}