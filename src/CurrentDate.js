import React from "react";

export default function CurrentDate(props) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  //Adds a '0' to hours/minutes lower than 10
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="CurrentDate">
      {day} {hours}:{minutes}
    </div>
  );
}
