import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TermsText({ language = 'en' }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`https://fakturera-backend-1.onrender.com/api/terms?lang=${language}`)
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

  const splitByLine = (text) => {
    return text
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);
  };

  if (loading) return <div className="terms-loading">Loading...</div>;
  if (error) return <div className="terms-error">{error}</div>;

  const paragraphs = splitByLine(content);

  return (
    <div className="terms-content" style={{ color: 'gray' }}>
      {paragraphs.map((para, idx) => (
        <p key={idx} style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          <span dangerouslySetInnerHTML={{ __html: para }} />
        </p>
      ))}
    </div>
  );
}
