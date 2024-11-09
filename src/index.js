import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherApp } from './pages/weather_app/WeatherApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);

reportWebVitals();
