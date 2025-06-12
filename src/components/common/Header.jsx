import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import logo from "../../assets/images/logo-light.png";
import logoDark from "../../assets/images/logo-dark.png";
import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
  };

  const navItems = [
    { name: t('menu.home'), path: "/" },
    { name: t('menu.about'), path: "/about" },
    { name: t('menu.products'), path: "/products" },
    { name: t('menu.contact'), path: "/contact" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-card/95 backdrop-blur-xl border-b border-border fixed w-full z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="w-32 h-12 flex items-center justify-center">
              <img
                src={theme === 'dark' ? logoDark || logo : logo}
                alt="Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 font-medium transition-colors duration-200 rounded-lg ${isActive(item.path)
                    ? 'text-primary bg-primary/10 border border-primary/20'
                    : 'text-foreground/80 hover:text-primary'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:border-primary/50 text-foreground hover:text-primary transition-colors duration-200"
              aria-label={t('common.language')}
            >
              {i18n.language.toUpperCase()}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border hover:border-primary/50 text-foreground hover:text-primary transition-colors duration-200"
              aria-label={t('common.theme')}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-4">
              {/* Language Toggle - Mobile */}
              <button
                onClick={toggleLanguage}
                className="w-9 h-9 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors duration-200"
                aria-label={t('common.language')}
              >
                {i18n.language.toUpperCase()}
              </button>

              {/* Theme Toggle Button - Mobile */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors duration-200"
                aria-label={t('common.theme')}
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4">
            <div className="flex flex-col space-y-3 border-t border-border pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 transition-colors duration-200 rounded-lg ${isActive(item.path)
                    ? 'text-primary bg-primary/10 border border-primary/20 font-medium'
                    : 'text-foreground/80 hover:text-foreground'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}