import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function searchForecast() {
    const apiKey = "3ca8fabd719ce46d29b590005e8ab76c";
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let celsius = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${celsius}`;
    axios.get(apiUrl).then(displayForecast);
  }

  useEffect(() => {
    return searchForecast();
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row weather-forecast">
          {forecast.map((dailyForecast, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
