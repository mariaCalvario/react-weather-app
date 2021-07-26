import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import CurrentDate from "./CurrentDate";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Form />
        <div className="row">
          <div className="col-6">
            <div className="current-location">
              <h1>
                <span id="current-city">{weatherData.city}</span>
                <span id="country">{weatherData.country}</span>
              </h1>
              <p id="current-date">
                <CurrentDate date={weatherData.date} />
              </p>
            </div>
            <ul className="current-weather">
              <li id="humidity">Humidity: {weatherData.humidity}%</li>
              <li id="wind">Wind speed: {Math.round(weatherData.wind)} km/h</li>
              <li id="temp">
                Temperature: {Math.round(weatherData.minTemp)}°
                <span id="temp-min"></span> | {Math.round(weatherData.maxTemp)}°
                <span id="temp-max"></span>
              </li>
            </ul>
          </div>
          <div className="col-6 text-center description-temp">
            <br />
            <h2 id="description">{weatherData.description}</h2>
            <div className="temp-units">
              <span id="current-temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/" id="celsius-link" className="active">
                  °C{" "}
                </a>
                |
                <a href="/" id="farenheit-link" className="inactive">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3ca8fabd719ce46d29b590005e8ab76c";
    let celsius = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${celsius}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
