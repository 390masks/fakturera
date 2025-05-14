import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import '../styles/terms.css';

const Header = ({ onLanguageChange }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLanguageToggle = () => {
    const newLanguage = currentLanguage === 'en' ? 'sv' : 'en';
    setCurrentLanguage(newLanguage);
    if (onLanguageChange) onLanguageChange(newLanguage);
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
        <img 
          src="https://storage.123fakturera.se/public/icons/diamond.png" 
          alt="Logo" 
          className="logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
        <nav className={`main-nav ${isMenuOpen ? 'mobile-visible' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsMenuOpen(false)}
            >
              {currentLanguage === 'en' ? item.en : item.sv}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="right-controls">
        <div className="language-switcher" onClick={handleLanguageToggle}>
          <span className="language-text">
            {currentLanguage === 'en' ? 'English' : 'Svenska'}
          </span>
          <img 
            src={currentLanguage === 'en' 
              ? 'https://storage.123fakturere.no/public/flags/GB.png' 
              : 'https://storage.123fakturere.no/public/flags/SE.png'} 
            alt={currentLanguage === 'en' ? 'English' : 'Swedish'} 
            className="flag-icon"
          />
        </div>

        <button 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

export default Header;