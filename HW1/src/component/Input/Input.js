import React, { useState } from 'react';

import './Input.css'; 

const ResultCard = ({ shortUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  };

  return (
    <div className="result">
      <p className='p_result'>Сокращенная ссылка: {shortUrl}</p>
      <button className="button_result" onClick={handleCopyClick}>
        {copied ? 'Скопировано!' : 'Копировать'}
      </button>
    </div>
  );
};

export default ResultCard;