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
          <input
            type="submit"
            value="Search"
            className="btn btn-primary mb-3 button"
          />
        </div>
        <div className="col-auto current-button">
          <button
            type="submit"
            id="geo-button"
            className="btn btn-primary mb-3"
          >
            <FaMapMarkerAlt />
          </button>
        </div>
      </form>
    </div>
  );
}
