import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="current-location">
            <h1>
              <span id="current-city">{props.info.city}</span>
              <span id="country">{props.info.country}</span>
            </h1>
            <div id="current-date">
              <CurrentDate date={props.info.date} />
            </div>
          </div>
          <ul className="current-weather">
            <li id="humidity">Humidity: {props.info.humidity}%</li>
            <li id="wind">Wind speed: {Math.round(props.info.wind)} km/h</li>
            <li id="temp">
              Temperature: {Math.round(props.info.minTemp)}°
              <span id="temp-min"></span> | {Math.round(props.info.maxTemp)}°
              <span id="temp-max"></span>
            </li>
          </ul>
        </div>
        <div className="col-6 text-center description-temp">
          <br />
          <h2 id="description">{props.info.description}</h2>
          <div className="temp-units">
            <span id="current-temperature">
              {Math.round(props.info.temperature)}
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
