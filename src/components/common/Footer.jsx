import React, { useState } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBusinessTime
} from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Footer() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const companyInfo = [
    {
      icon: <FaMapMarkerAlt className="w-4 h-4 flex-shrink-0" />,
      text: "Floor 15, Bitexco Financial Tower, District 1, Ho Chi Minh City"
    },
    {
      icon: <FaPhoneAlt className="w-4 h-4 flex-shrink-0" />,
      text: "+84 (28) 3821 8888"
    },
    {
      icon: <FaEnvelope className="w-4 h-4 flex-shrink-0" />,
      text: "hello@kademia.com"
    },
    {
      icon: <FaBusinessTime className="w-4 h-4 flex-shrink-0" />,
      text: "Mon - Fri: 8:00 AM - 6:00 PM"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <FaFacebookF className="w-3.5 h-3.5" />, url: "#", label: "Facebook" },
    { icon: <FaLinkedinIn className="w-3.5 h-3.5" />, url: "#", label: "LinkedIn" },
    { icon: <FaTwitter className="w-3.5 h-3.5" />, url: "#", label: "Twitter" },
    { icon: <FaInstagram className="w-3.5 h-3.5" />, url: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-background border-t transition-all duration-500" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-5 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Kademia
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed transition-colors duration-300">
                Empowering businesses through innovative technology solutions.
                We deliver cutting-edge web development, mobile applications, and digital transformation services.
              </p>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors duration-300 group"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <div className="w-10 h-6 rounded-full bg-foreground/10 flex items-center justify-center p-1 group-hover:bg-primary/10 transition-colors duration-300">
                <div className={`w-4 h-4 rounded-full bg-primary transition-all duration-300 flex items-center justify-center ${theme === 'light' ? 'translate-x-0' : 'translate-x-4'}`}>
                  {theme === 'light' ? (
                    <FiSun className="w-3 h-3 text-white" />
                  ) : (
                    <FiMoon className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
              <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              Contact Info
            </h4>
            <ul className="space-y-4">
              {companyInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 group transition-colors duration-300 hover:text-primary"
                >
                  <span className="mt-0.5 text-primary group-hover:animate-bounce transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <HiOutlineArrowNarrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative my-12 h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="absolute left-1/4 w-1/2 h-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-foreground/70 transition-colors duration-300">
              Connect With Us
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:bg-primary/10 hover:border-primary/30"
                  style={{
                    borderColor: 'var(--color-border)'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-foreground/70 transition-colors duration-300">
              © {new Date().getFullYear()} Kademia. All rights reserved.
            </p>
            <p className="text-xs text-foreground/50 mt-1 transition-colors duration-300">
              Made with <span className="text-primary">❤️</span> in Ho Chi Minh City, Vietnam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}