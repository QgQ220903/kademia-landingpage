import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

const ContactInfoItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-4 mb-4 last:mb-0">
    <div className="icon-container mt-1">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-foreground">{title}</h4>
      <p className="text-foreground/70">{content}</p>
    </div>
  </div>
);

const ContactInfoSection = () => {
  return (
    <div className="space-y-6">
      <div className="card-base p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Contact Info</h3>
        <div>
          <ContactInfoItem
            icon={<FiMail />}
            title="Email"
            content="kademiavietnam@gmail.com"
          />
          <ContactInfoItem
            icon={<FiPhone />}
            title="Phone"
            content="(+84) 96 876 4080"
          />
          <ContactInfoItem
            icon={<FiMapPin />}
            title="Address"
            content="5 Me Linh Point, District 1, Ho Chi Minh city, Vietnam"
          />
        </div>
      </div>

      <div className="card-base p-8">
        <h3 className="text-2xl font-bold text-primary mb-6">Working Hours</h3>
        <div className="flex items-start gap-4">
          <div className="icon-container mt-1">
            <FiClock />
          </div>
          <div className="space-y-3">
            <p className="flex justify-between">
              <span className="text-foreground/70">Mon-Fri:</span>
              <span className="text-foreground">8:30 AM - 5:30 PM</span>
            </p>
            <p className="flex justify-between">
              <span className="text-foreground/70">Saturday:</span>
              <span className="text-foreground">8:30 AM - 12:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span className="text-foreground/70">Sunday:</span>
              <span className="text-foreground">Closed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;