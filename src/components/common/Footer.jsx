import React from 'react';
import { useTranslation } from 'react-i18next';
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
import logo from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const companyInfo = [
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      text: t('footer.contact.address'),
    },
    {
      icon: <FaPhoneAlt className="w-4 h-4" />,
      text: t('footer.contact.phone'),

    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      text: t('footer.contact.email')
    },
    {
      icon: <FaBusinessTime className="w-4 h-4" />,
      text: t('footer.contact.hours')
    }
  ];

  const quickLinks = [
    { name: t('footer.quickLinks.home'), href: "/" },
    { name: t('footer.quickLinks.about'), href: "/about" },
    { name: t('footer.quickLinks.product'), href: "/products" },
    { name: t('footer.quickLinks.contact'), href: "/contact" }
  ];

  const socialLinks = [
    { icon: <FaFacebookF className="w-4 h-4" />, url: "https://www.facebook.com/profile.php?id=61567618885850" },
    { icon: <FaLinkedinIn className="w-4 h-4" />, url: "https://www.linkedin.com/company/kademia-vietnam/" },
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
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-3">{t('footer.contact.title')}</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5"><FaMapMarkerAlt className="w-4 h-4" /></span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(t('footer.contact.address'))}`}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  target="_blank" rel="noopener noreferrer"
                >
                  {t('footer.contact.address')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5"><FaPhoneAlt className="w-4 h-4" /></span>
                <a
                  href={`tel:${t('footer.contact.phone').replace(/[^+\d]/g, '')}`}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {t('footer.contact.phone')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5"><FaEnvelope className="w-4 h-4" /></span>
                <a
                  href={`mailto:${t('footer.contact.email')}`}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {t('footer.contact.email')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5"><FaBusinessTime className="w-4 h-4" /></span>
                <span className="text-sm text-foreground/70">{t('footer.contact.hours')}</span>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-3">{t('footer.quickLinks.title')}</h4>
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
                target="_blank"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-sm text-foreground/70">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}