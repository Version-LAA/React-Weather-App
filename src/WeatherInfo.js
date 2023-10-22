import React from "react";

export default function WeatherInfo() {
  return (
    <ul className="weather-info">
      <li>
        Humidity: <span id="humidity"></span>
      </li>
      <li>
        Wind: <span id="wind"></span>
      </li>
    </ul>
  );
}
