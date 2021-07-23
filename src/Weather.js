import React from "react";
import Form from "./Form";

import "./Weather.css";

export default function Weather() {
  let CurrentCityData = {
    city: "Lisbon",
    country: "PT",
    date: "Tuesday 15:05",
  };
  let CurrentWeatherData = {
    humidity: 50,
    wind: 10,
    tempMin: 20,
    tempMax: 25,
  };
  let CurrentTemperatureData = {
    description: "Few clouds",
    temperature: 22,
  };
  return (
    <div className="Weather">
      <Form />
      <div className="row">
        <div className="col-6">
          <div className="current-location">
            <h1>
              <span id="current-city">{CurrentCityData.city}</span>
              <span id="country">{CurrentCityData.country}</span>
            </h1>
            <p id="current-date">{CurrentCityData.date}</p>
          </div>
          <ul className="current-weather">
            <li id="humidity">Humidity: {CurrentWeatherData.humidity}%</li>
            <li id="wind">Wind speed: {CurrentWeatherData.wind} km/h</li>
            <li id="temp">
              Temperature: {CurrentWeatherData.tempMin}°
              <span id="temp-min"></span> | {CurrentWeatherData.tempMax}°
              <span id="temp-max"></span>
            </li>
          </ul>
        </div>
        <div className="col-6 text-center description-temp">
          <br />
          <h2 id="description">{CurrentTemperatureData.description}</h2>
          <div className="temp-units">
            <span id="current-temperature">
              {CurrentTemperatureData.temperature}
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
}
