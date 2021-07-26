import React, { useState } from "react";

export default function TemperatureUnits(props) {
  const [unit, setUnit] = useState("celsius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureUnits">
        <span id="current-temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <span id="celsius-link" className="active">
            °C |{" "}
          </span>
          <a
            href="/"
            onClick={displayFahrenheit}
            id="farenheit-link"
            className="inactive"
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TemperatureUnits">
        <span id="current-temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a
            href="/"
            onClick={displayCelsius}
            id="celsius-link"
            className="active"
          >
            °C |{" "}
          </a>

          <span id="farenheit-link" className="inactive">
            °F
          </span>
        </span>
      </div>
    );
  }
}
