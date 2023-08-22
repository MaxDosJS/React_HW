import React, { useState } from 'react';

import './Form.css'; 

const InputForm = ({ onShorten }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputUrl(event.target.value);
  };

  const shortenUrl = async () => {
    if (inputUrl.trim() === '') return;

    setIsLoading(true);

    try {
      const response = await fetch(`https://clck.ru/--?url=${inputUrl}`);
      const data = await response.text();
      setShortUrl(data);
      onShorten(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className='input_Div'>
      <input className='input_text' type="text" value={inputUrl} onChange={handleInputChange} />
      <button onClick={shortenUrl} disabled={!inputUrl.trim()} className= {isLoading ? 'loading' : ''}>
        {isLoading ? 'Сокращение...' : 'Сократить'} 
      </button>
    
    </div>
  );
};

export default InputForm;