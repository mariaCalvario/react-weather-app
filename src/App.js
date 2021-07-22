import React from "react";
import Form from "./Form";
import CurrentCity from "./CurrentCity";
import CurrentWeather from "./CurrentWeather";
import CurrentTemperature from "./CurrentTemperature";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <div className="row">
          <div className="col-6">
            <CurrentCity />
            <CurrentWeather />
          </div>
          <div className="col-6">
            <CurrentTemperature />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
