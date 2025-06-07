import React from 'react';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";
import MapSection from '../components/contact/MapSection';

const Contact = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <ContactHeroSection />

      {/* Main Content */}
      <section className="gradient-section py-20 px-4">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactFormSection />
          <ContactInfoSection />
        </div>
      </section>

      {/* Map Section */}
      <MapSection />
    </div>
  );
};

export default Contact;