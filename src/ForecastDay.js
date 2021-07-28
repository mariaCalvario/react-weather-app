import React from "react";
import Icons from "./Icons";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return weekDays[day];
  }

  return (
    <div className="ForecastDay">
      <div className="weather-forecast-date">{day()}</div>
      <Icons icon={props.data.weather[0].icon} size={36} />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-max">{maxTemperature()} | </span>
        <span className="weather-forecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
