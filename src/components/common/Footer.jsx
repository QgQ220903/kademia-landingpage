import React from 'react';
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
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useTheme } from "../../contexts/ThemeContext";
import logo from "../../assets/images/logo-light.jpg";
import logoDark from "../../assets/images/logo-dark.png";

export default function Footer() {
  const { theme } = useTheme();
  const companyInfo = [
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      text: "Floor 15, Bitexco Financial Tower, District 1, Ho Chi Minh City"
    },
    {
      icon: <FaPhoneAlt className="w-4 h-4" />,
      text: "+84 (28) 3821 8888"
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      text: "hello@kademia.com"
    },
    {
      icon: <FaBusinessTime className="w-4 h-4" />,
      text: "Mon - Fri: 8:00 AM - 6:00 PM"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/product" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { icon: <FaFacebookF className="w-4 h-4" />, url: "#" },
    { icon: <FaLinkedinIn className="w-4 h-4" />, url: "#" },
    { icon: <FaTwitter className="w-4 h-4" />, url: "#" },
    { icon: <FaInstagram className="w-4 h-4" />, url: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <img
              src={theme === 'dark' ? logoDark || logo : logo}
              alt="Logo"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-foreground/70 text-sm">
              Empowering businesses through innovative technology solutions.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-3">Contact Info</h4>
            <ul className="space-y-2">
              {companyInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">{item.icon}</span>
                  <span className="text-sm text-foreground/70">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <HiOutlineArrowNarrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label={`Social media link ${index}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Kademia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}