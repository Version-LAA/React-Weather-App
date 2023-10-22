import React from "react";

export default function CurrentTemp() {
  return (
    <div className="currentTemp">
      <div className="row">
        <div className="col">
          <div className="temp">
            <span>
              <img id="weather-image" alt="weather" />
            </span>
            <span id="temp-a"></span>{" "}
            <button href="#" id="ftemp">
              °F{" "}
            </button>
            <span id="line"> | </span>
            <button href="#" id="ctemp">
              °C{" "}
            </button>
            <div id="weather-desc"></div>
          </div>
        </div>
        <div className="col-3" id="location"></div>
      </div>
    </div>
  );
}
