import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import TermsPage from './Pages/TermsPage';

function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export default function App() {
  useEffect(() => {
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/terms" replace />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}
