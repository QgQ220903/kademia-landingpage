import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import ContactInfoItem from './ContactInfoItem';
const ContactInfoSection = () => {
  return (
    <div className="space-y-6">
      {/* Contact Info Card */}
      <div className="card-base">
        <h3 className="text-2xl font-bold text-primary mb-6">Contact Info</h3>
        <div className="space-y-4">
          <ContactInfoItem
            icon={<FiMail />}
            title="Email"
            content="contact@kademia.com"
          />
          <ContactInfoItem
            icon={<FiPhone />}
            title="Phone"
            content="+84 123 456 789"
          />
          <ContactInfoItem
            icon={<FiMapPin />}
            title="Address"
            content="10th Floor, Techcombank Building, Hanoi, Vietnam"
          />
        </div>
      </div>

      {/* Working Hours Card */}
      <div className="card-base">
        <h3 className="text-2xl font-bold text-primary mb-6">Working Hours</h3>
        <div className="flex items-start gap-4">
          <div className="icon-container">
            <FiClock />
          </div>
          <div className="space-y-3">
            <p className="flex justify-between">
              <span className="text-text-secondary">Mon-Fri:</span>
              <span>8:30 AM - 5:30 PM</span>
            </p>
            <p className="flex justify-between">
              <span className="text-text-secondary">Saturday:</span>
              <span>8:30 AM - 12:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span className="text-text-secondary">Sunday:</span>
              <span>Closed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
// Sub-component for contact info