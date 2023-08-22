import React, { useState } from 'react';
import InputForm from './component/Form/Form';
import ResultCard from './component/Input/Input';

import './App.css'; 

const App = () => {
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = (url) => {
    setShortUrl(url);
  };

  return (
    <div className="app">
      <h1>Сокращение ссылок</h1>
      <p className='app_p'>Помогите клиентам быстро найти вашу страницу в интернете. Благодаря короткой ссылке клиентам не придётся видеть длинные url-адреса, занимающие много места.</p>
      <InputForm onShorten={handleShorten}  />
      {shortUrl && <ResultCard shortUrl={shortUrl} />}
    </div>
  );
};

export default App;