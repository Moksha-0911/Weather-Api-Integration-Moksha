import React from 'react';
import { CloudSun } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <CloudSun size={32} className="logo-icon" />
          <span>WeatherApp </span>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="https://openweathermap.org/api/one-call-3?collection=one_call_api_3.0" target="_blank" rel="noopener noreferrer">API Docs</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
