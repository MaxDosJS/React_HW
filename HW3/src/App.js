import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBox from './components/SearchBox';

const api = {
  key: "30d95ba03fd687647613ee688562224d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [weather, setWeather] = useState({});

  const handleSearch = (query) => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <SearchBox onSearch={handleSearch} />
        <WeatherDisplay weather={weather} />
      </main>
    </div>
  );
}

export default App;