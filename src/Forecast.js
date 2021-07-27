import React from "react";
import Icons from "./Icons";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row weather-forecast">
        <div className="col">
          <div className="weather-forecast-date">Wednesday</div>
          <Icons icon="01d" size={38} />
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-min">14° | </span>
            <span className="weather-forecast-max">26°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
