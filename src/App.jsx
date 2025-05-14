import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TermsPage from './Pages/TermsPage';


export default function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/terms" replace />} />
        
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}