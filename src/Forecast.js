import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function loadForecast() {
    const apiKey = "3ca8fabd719ce46d29b590005e8ab76c";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let celsius = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${celsius}`;
    axios.get(apiUrl).then(displayForecast);
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loadForecast();

    return null;
  }
}
