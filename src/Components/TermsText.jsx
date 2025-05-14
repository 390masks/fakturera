import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TermsText({ language = 'en' }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    axios.get(`http://localhost:3000/api/terms?lang=${language}`)
      .then(res => {
        setContent(res.data.content);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load terms content');
        setLoading(false);
        console.error("API Error:", err);
      });
  }, [language]);

  if (loading) return <div className="terms-loading">Loading...</div>;
  if (error) return <div className="terms-error">{error}</div>;

  return (
    <div 
      className="terms-content" 
      style={{ color: 'gray' }} 
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
}