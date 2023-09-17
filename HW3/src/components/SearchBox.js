import React, { useState } from 'react';

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      onSearch(query);
      setQuery(''); 
    }
  };

  return (
    <div className="search-box">
      <input 
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchBox;