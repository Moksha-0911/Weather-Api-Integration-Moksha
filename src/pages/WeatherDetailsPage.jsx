import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import Forecast from './Forecast';
import { ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { countries } from '../data/countries';
import '../styles/WeatherDetailsPage.css';

const WeatherDetailsPage = () => {
  const { id } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Country name check
        const searchName = id.toLowerCase().trim();
        if (countries.includes(searchName) || ['usa', 'us', 'uk', 'uae'].includes(searchName)) {
          throw new Error('Please enter a city name. Weather details are not available for countries.');
        }

        // Use id= if numeric city ID, else use q= for city name
        const queryParam = !isNaN(id) ? `id=${id}` : `q=${id}`;

        // Fetch current weather AND forecast in parallel (2 calls at once)
        const [weatherRes, forecastRes] = await Promise.all([
          axios.get(`https://api.openweathermap.org/data/2.5/weather?${queryParam}&units=metric&appid=${API_KEY}`),
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?${queryParam}&units=metric&appid=${API_KEY}`)
        ]);

        console.log("Weather Data:", weatherRes.data);
        console.log("Forecast Data:", forecastRes.data);

        setWeatherData(weatherRes.data);
        setForecastData(forecastRes.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch weather data.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchWeatherData();
    }
  }, [id, API_KEY]);

  if (loading) {
    return (
      <div className="status-container">
        <Loader2 className="spinner" size={48} />
        <p>Fetching weather for {id}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error">
        <AlertCircle size={48} />
        <h2>Oops!</h2>
        <p>{error}</p>
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="weather-details-page">
      <Link to="/" className="back-btn">
        <ArrowLeft size={20} /> Back
      </Link>

      {weatherData && <WeatherCard data={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} />}
    </div>
  );
};

export default WeatherDetailsPage;
