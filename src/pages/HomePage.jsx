import React from 'react';
import SearchBar from '../pages/SearchBar.jsx';
import { CloudLightning, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import { popularCities } from '../data/weather-details';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Stay Ahead of the Storm</h1>
        <p>Get real-time weather updates and 6-day forecasts for any city in the world.</p>
        <SearchBar />
      </header>

      <section className="popular-cities">
        <h3><MapPin size={20}/> Popular Cities</h3>
        <div className="city-chips">
          {popularCities.map((city) => (
            <button 
              key={city.name} 
              className="city-chip"
              onClick={() => navigate(`/weather/${city.name}`)}
            >
              {city.name}
            </button>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <CloudLightning className="feature-icon" />
          <h4>Real-time Alerts</h4>
          <p>Get instant notifications about severe weather conditions.</p>
        </div>
        <div className="feature-card">
          <MapPin className="feature-icon" />
          <h4>Global Coverage</h4>
          <p>Weather data for over 200,000 cities worldwide.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
