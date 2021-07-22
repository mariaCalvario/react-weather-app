import React from "react";

import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  let CurrentTemperatureData = {
    description: "Few clouds",
    temperature: 22,
    img: "./images/weather-icons/02d.png",
  };

  return (
    <div className="CurrentTemperature">
      <div className="text-center description-temp">
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
  );
}
