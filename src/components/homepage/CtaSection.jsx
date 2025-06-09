import { useTranslation } from 'react-i18next';

export default function CtaSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-foreground">
            {t('cta.badge')}
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t('cta.title.start')}{' '}
          <span className="text-primary">{t('cta.title.highlight')}</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="/contact"
            className="btn-base btn-primary btn-lg"
          >
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
}