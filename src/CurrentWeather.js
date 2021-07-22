import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  let CurrentWeatherData = {
    humidity: 50,
    wind: 10,
    tempMin: 20,
    tempMax: 25,
  };

  return (
    <div className="CurrentWeather">
      <ul className="current-weather">
        <li id="humidity">Humidity: {CurrentWeatherData.humidity}%</li>
        <li id="wind">Wind speed: {CurrentWeatherData.wind} km/h</li>
        <li id="temp">
          Temperature: {CurrentWeatherData.tempMin}°<span id="temp-min"></span>{" "}
          | {CurrentWeatherData.tempMax}°<span id="temp-max"></span>
        </li>
      </ul>
    </div>
  );
}
