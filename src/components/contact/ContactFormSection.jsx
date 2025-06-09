import React from 'react';
import { FiSend } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ContactFormSection = () => {
  const { t } = useTranslation();

  return (
    <div className="card-base p-8">
      <h3 className="text-2xl font-bold text-primary mb-6">{t('contact.form.heading')}</h3>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-foreground/80 mb-2">{t('contact.form.name')}</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary"
              placeholder={t('contact.form.placeholder.name')}
            />
          </div>
          <div>
            <label className="block text-foreground/80 mb-2">{t('contact.form.email')}</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary"
              placeholder={t('contact.form.placeholder.email')}
            />
          </div>
        </div>

        <div>
          <label className="block text-foreground/80 mb-2">{t('contact.form.subject')}</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary"
            placeholder={t('contact.form.placeholder.subject')}
          />
        </div>

        <div>
          <label className="block text-foreground/80 mb-2">{t('contact.form.message')}</label>
          <textarea
            rows="5"
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary"
            placeholder={t('contact.form.placeholder.message')}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-base btn-primary w-full py-3 flex items-center justify-center"
        >
          <FiSend className="mr-2" />
          {t('contact.form.button')}
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;