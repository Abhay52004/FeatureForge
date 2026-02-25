import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function WeatherComponent() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const API_KEY = '46fbc6949c2d497faf7b006f92cb960e';

  const fetchWeather = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      setError('');
    } catch {
      setError('City not found or API error');
      setWeather(null);
    }
  }, [city]);

  useEffect(() => {
    if (city) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchWeather();
    }
  }, [city, fetchWeather]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  };

  return (
    <div className="container mt-4 weather-section">
      <h1 className="weather-title">Weather</h1>
      <form onSubmit={handleSubmit} className="mb-4 weather-form">
        <div className="input-group weather-input-group">
          <input type="text" name="city" className="form-control" placeholder="Enter city" required />
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
      {error && <p className="text-danger">{error}</p>}
      {weather && (
        <div className="card weather-card">
          <div className="card-body weather-card-body">
            <h5 className="card-title">{weather.name}</h5>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherComponent;