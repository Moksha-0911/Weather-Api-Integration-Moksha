import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SkyCast Weather App. Data provided by OpenWeatherMap.</p>
    </footer>
  );
};

export default Footer;
