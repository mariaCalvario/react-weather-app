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
          <button type="submit" className="btn btn-primary mb-3 button">
            Search
          </button>
        </div>
        <div className="col-auto current-button">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            id="geo-button"
          >
            <div className="geo-icon">
              <FaMapMarkerAlt />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
