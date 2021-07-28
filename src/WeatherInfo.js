import React from "react";
import CurrentDate from "./CurrentDate";
import Icons from "./Icons";
import TemperatureUnits from "./TemperatureUnits";

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
              Temperature: {Math.round(props.info.maxTemp)}°
              <span id="temp-max"></span> | {Math.round(props.info.minTemp)}°
              <span id="temp-min"></span>
            </li>
          </ul>
        </div>
        <div className="col-6 text-center description-temp">
          <Icons
            icon={props.info.icon}
            size={85}
            alt={props.info.description}
          />
          <br />
          <h2 id="description">{props.info.description}</h2>
          <div className="temp-units">
            <TemperatureUnits celsius={props.info.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
