import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Header";
import TermsText from "../Components/TermsText";
import '../styles/terms.css';

export default function TermsPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const navigate = useNavigate();

  return (
    <div className="terms-page">
      <Header onLanguageChange={setCurrentLanguage} />
      
      <div className="terms-header">
        <h1 className="terms-title">
          {currentLanguage === 'en' ? 'Terms' : 'Villkor'}
        </h1>
        <button 
          className="close-button"
          onClick={() => navigate(-1)}
        >
          {currentLanguage === 'en' ? 'Close and Go Back' : 'Stäng och gå tillbaka'}
        </button>
      </div>

      <TermsText language={currentLanguage} />
      <div className="terms-header">
      <button 
          className="close-button"
          onClick={() => navigate(-1)}
        >
          {currentLanguage === 'en' ? 'Close and Go Back' : 'Stäng och gå tillbaka'}
        </button>
        </div>
    </div>
  );
}