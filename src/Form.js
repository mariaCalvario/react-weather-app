import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form" className="row">
        <div className="col search-bar">
          <input
            id="search"
            type="search"
            className="form-control"
            placeholder="Enter a city..."
          />
        </div>
        <div className="col-auto search-button">
          <input type="submit" value="Search" className="button" />
        </div>

        <div className="col-auto current-button">
          <input type="submit" id="geo-button" />
        </div>
      </form>
    </div>
  );
}
