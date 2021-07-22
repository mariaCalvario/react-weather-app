import React from "react";

import "./CurrentCity.css";

export default function CurrentCity() {
  let CurrentCityData = {
    city: "Lisbon",
    country: "PT",
    date: "Tuesday 15:05",
  };

  return (
    <div className="CurrentCity">
      <div className="current-location">
        <h1>
          <span id="current-city">{CurrentCityData.city}</span>
          <span id="country">{CurrentCityData.country}</span>
        </h1>
        <p id="current-date">{CurrentCityData.date}</p>
      </div>
    </div>
  );
}
