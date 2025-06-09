import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import ContactInfoItem from "./ContactInfoItem";

const ContactInfoSection = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="card-base p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">{t('contact.info.heading')}</h3>
        <div className='space-y-4'>
          <ContactInfoItem
            icon={<FiMail />}
            title={t('contact.info.email')}
            content={t('contact.info.emailValue')}
          />
          <ContactInfoItem
            icon={<FiPhone />}
            title={t('contact.info.phone')}
            content={t('contact.info.phoneValue')}
          />
          <ContactInfoItem
            icon={<FiMapPin />}
            title={t('contact.info.address')}
            content={t('contact.info.addressValue')}
          />
        </div>
      </div>

      <div className="card-base p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">{t('contact.info.workingHoursHeading')}</h3>
        <div className="flex items-start gap-4">
          <div className="icon-container mt-1">
            <FiClock />
          </div>
          <div className="space-y-5">
            <p className="flex justify-between">
              <span className="text-foreground/70">{t('contact.info.workingHours.monFri')}:</span>
              <span className="text-foreground">{t('contact.info.workingHours.monFriValue')}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-foreground/70">{t('contact.info.workingHours.saturday')}:</span>
              <span className="text-foreground">{t('contact.info.workingHours.saturdayValue')}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-foreground/70">{t('contact.info.workingHours.sunday')}:</span>
              <span className="text-foreground">{t('contact.info.workingHours.sundayValue')}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;