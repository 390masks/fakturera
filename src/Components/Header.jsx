import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/terms.css';

const Header = ({ onLanguageChange }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    if (onLanguageChange) onLanguageChange(lang);
    setIsDropdownOpen(false);
  };

  const navItems = [
    { path: '/', en: 'Home', sv: 'Hem' },
    { path: '/order', en: 'Order', sv: 'Beställ' },
    { path: '/customers', en: 'Our Customers', sv: 'Våra Kunder' },
    { path: '/about', en: 'About us', sv: 'Om oss' },
    { path: '/contact', en: 'Contact Us', sv: 'Kontakta oss' }
  ];

  return (
    <header className="header">
      <div className="nav-container">
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <img
          src="https://storage.123fakturera.se/public/icons/diamond.png"
          alt="Logo"
          className="logo"
          onClick={() => navigate('/')}
        />
      </div>

      <nav className={`main-nav ${isMenuOpen ? 'mobile-visible' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {currentLanguage === 'en' ? item.en : item.sv}
          </NavLink>
        ))}
      </nav>

      <div className="language-switcher-container">
        <div className="language-dropdown">
          <button className="language-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img
              src={
                currentLanguage === 'en'
                  ? 'https://storage.123fakturere.no/public/flags/GB.png'
                  : 'https://storage.123fakturere.no/public/flags/SE.png'
              }
              alt="Current Language"
              className="flag-icon"
            />
            <span>{currentLanguage === 'en' ? 'English' : 'Svenska'}</span>
          </button>

          {isDropdownOpen && (
            <ul className="language-options">
              <li
                onClick={() => handleLanguageChange('en')}
                className={currentLanguage === 'en' ? 'selected-lang' : ''}
              >
                English
                <img
                  src="https://storage.123fakturere.no/public/flags/GB.png"
                  alt="English"
                  className="flag-icon"
                />
              </li>
              <li
                onClick={() => handleLanguageChange('sv')}
                className={currentLanguage === 'sv' ? 'selected-lang' : ''}
              >
                Svenska
                <img
                  src="https://storage.123fakturere.no/public/flags/SE.png"
                  alt="Swedish"
                  className="flag-icon"
                />
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
