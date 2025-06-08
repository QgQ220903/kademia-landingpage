import React from 'react';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import MapSection from '../components/contact/MapSection';

const Contact = () => {
  return (
    <div>
      <ContactHeroSection />

      <section className="py-16 px-4 bg-background">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactFormSection />
          <ContactInfoSection />
        </div>
      </section>

      <MapSection />
    </div>
  );
};

export default Contact;