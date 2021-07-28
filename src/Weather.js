import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
    //search for a city
  }

  function updateCity(event) {
    setCity(event.target.value);
    //update the searched city
  }

  function searchCity() {
    const apiKey = "3ca8fabd719ce46d29b590005e8ab76c";
    let celsius = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${celsius}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Form">
          <form id="search-form" className="row" onSubmit={handleSubmit}>
            <div className="col search-bar">
              <input
                id="search"
                type="search"
                className="form-control"
                placeholder="Enter a city..."
                onChange={updateCity}
              />
            </div>
            <div className="col-auto search-button">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary mb-3 button"
              />
            </div>
          </form>
        </div>
        <WeatherInfo info={weatherData} />
        <hr />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
