import React from "react";

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img src={`/icons/${props.icon}.png`} id="icon" alt={props.alt} />
    </div>
  );
}
