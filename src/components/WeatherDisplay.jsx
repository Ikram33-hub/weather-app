import React from "react";
import "./WeatherDisplay.css";

function WeatherDisplay({ weather }) {
  if (!weather) return <p>No weather data yet.</p>;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.temp} °C</p>
      <p>Humidity: {weather.humidity} %</p>
      <p>Condition: {weather.condition}</p>
      <img src={weather.icon} alt="weather icon" />
    </div>
  );
}

export default WeatherDisplay;
