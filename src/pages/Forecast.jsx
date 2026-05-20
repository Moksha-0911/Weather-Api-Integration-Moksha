import React from 'react';

const Forecast = ({ forecastData }) => {
  // Group by unique date to extract up to 6 calendar days
  const dailyForecast = [];
  const seenDates = new Set();
  
  for (const item of forecastData.list) {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!seenDates.has(date)) {
      seenDates.add(date);
      dailyForecast.push(item);
    }
  }
  
  const finalForecast = dailyForecast.slice(0, 6);

  return (
    <div className="forecast-section">
      <h3>6-Day Forecast</h3>
      <div className="forecast-grid">
        {finalForecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <span className="forecast-day">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
              alt={day.weather[0].description}
            />
            <span className="forecast-temp">{Math.round(day.main.temp)}°C</span>
            <span className="forecast-desc">{day.weather[0].main}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
