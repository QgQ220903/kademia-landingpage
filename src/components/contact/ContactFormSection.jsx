import React from 'react';
import { FiSend } from "react-icons/fi";

const ContactFormSection = () => {
  return (
    <div className="card-base">
      <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-text-secondary mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-bg-card border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-text-secondary mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-bg-card border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-text-secondary mb-2">Subject</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-bg-card border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
            placeholder="Subject"
          />
        </div>

        <div>
          <label className="block text-text-secondary mb-2">Message</label>
          <textarea
            rows="5"
            className="w-full px-4 py-3 bg-bg-card border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary btn-base w-full py-4 flex items-center justify-center"
        >
          <FiSend className="mr-2" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;