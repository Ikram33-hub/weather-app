import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // بيانات ثابتة للـ demo
  const demoWeather = {
    name: "Casablanca",
    temp: 25,
    humidity: 60,
    condition: "Sunny",
    icon: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
  };

  const handleSearch = (city) => {
    if (city.trim().toLowerCase() === "casablanca") {
      setWeather(demoWeather);
      setError("");
    } else {
      setWeather(null);
      setError("City not found");
    }
  };

  return (
    <div className="App">
      <h1>🌤️ Weather App (Demo)</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
