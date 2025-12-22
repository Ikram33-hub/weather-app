import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const handleSearch = async (city) => {
    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (data.cod !== 200) {
        setWeather(null);
        setError("City not found ❌");
        return;
      }

      setWeather(data);
    } catch (err) {
      setError("Something went wrong ⚠️");
    }
  };

  return (
    <div className="App">
      <h1>🌤️ Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
