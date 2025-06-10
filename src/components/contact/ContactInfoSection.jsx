import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import ContactInfoItem from './ContactInfoItem';

const ContactInfoSection = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="card-base p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{t('contact.info.heading')}</h3>
        <div className='space-y-3 md:space-y-4'>
          <ContactInfoItem
            icon={<FiMail className="text-lg" />}
            title={t('contact.info.email')}
            content={t('contact.info.emailValue')}
          />
          <ContactInfoItem
            icon={<FiPhone className="text-lg" />}
            title={t('contact.info.phone')}
            content={t('contact.info.phoneValue')}
          />
          <ContactInfoItem
            icon={<FiMapPin className="text-lg" />}
            title={t('contact.info.address')}
            content={t('contact.info.addressValue')}
          />
        </div>
      </div>

      <div className="card-base p-4 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{t('contact.info.workingHoursHeading')}</h3>
        <div className="flex items-start gap-3 md:gap-4">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 text-primary">
            <FiClock className="text-lg" />
          </div>
          <div className="space-y-3 md:space-y-5 flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-foreground/70">{t('contact.info.workingHours.monFri')}:</span>
              <span className="text-foreground">{t('contact.info.workingHours.monFriValue')}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-foreground/70">{t('contact.info.workingHours.saturday')}:</span>
              <span className="text-foreground">{t('contact.info.workingHours.saturdayValue')}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-foreground/70">{t('contact.info.workingHours.sunday')}:</span>
              <span className="text-foreground">{t('contact.info.workingHours.sundayValue')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactInfoSection;