import React from "react";
import Icons from "./Icons";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div classNameName="Forecast" id="forecast">
      <div classNameName="row">
        <div classNameName="col">
          <div className="weather-forecast-date">Wednesday</div>
          <Icons icon="01d" />
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-min">14° | </span>
            <span className="weather-forecast-max">26°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
