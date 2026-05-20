import React from 'react';
import { Wind, Droplets, Thermometer, Cloud, Sun, CloudRain, CloudLightning, CloudSnow } from 'lucide-react';

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  const condition = weather[0].main;
  const icon = weather[0].icon;

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear': return <Sun className="weather-large-icon sun" />;
      case 'clouds': return <Cloud className="weather-large-icon clouds" />;
      case 'rain': return <CloudRain className="weather-large-icon rain" />;
      case 'thunderstorm': return <CloudLightning className="weather-large-icon storm" />;
      case 'snow': return <CloudSnow className="weather-large-icon snow" />;
      default: return <Cloud className="weather-large-icon" />;
    }
  };

  return (
    <div className="weather-card animate-fade-in">
      <div className="weather-header">
        <h2>{data.name}</h2>
        <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
      </div>
      
      <div className="weather-main">
        <div className="weather-temp-section">
          {getWeatherIcon(condition)}
          <div className="temp-display">
            <span className="temp-value">{Math.round(main.temp)}°C</span>
            <span className="condition-text">{condition}</span>
          </div>
        </div>
      </div>

      <div className="weather-details-grid">
        <div className="detail-item">
          <Thermometer size={20} />
          <div className="detail-info">
            <span>Feels Like</span>
            <strong>{Math.round(main.feels_like)}°C</strong>
          </div>
        </div>
        <div className="detail-item">
          <Droplets size={20} />
          <div className="detail-info">
            <span>Humidity</span>
            <strong>{main.humidity}%</strong>
          </div>
        </div>
        <div className="detail-item">
          <Wind size={20} />
          <div className="detail-info">
            <span>Wind Speed</span>
            <strong>{wind.speed} m/s</strong>
          </div>
        </div>
        <div className="detail-item">
          <Cloud size={20} />
          <div className="detail-info">
            <span>Pressure</span>
            <strong>{main.pressure} hPa</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
