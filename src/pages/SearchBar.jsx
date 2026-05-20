import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${city}`);
      setCity('');
    }
  };

  return (
    <>
      <style>{`
        .search-bar input::placeholder {
          color: white;
          opacity: 1;
        }
      `}</style>
      <form className="search-bar" onSubmit={handleSearch}>
        <div className="search-input-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
