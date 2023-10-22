import React from "react";

export default function Search() {
  return (
    <form className="search-form">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Enter a City"
          aria-label="City search with two button addons"
          id="city"
        />
        <button
          id="search-button"
          className="btn btn-outline-secondary"
          type="submit"
        >
          Search
        </button>
        <button
          id="current-location"
          className="btn btn-outline-secondary"
          type="button"
        >
          Current Location
        </button>
      </div>
    </form>
  );
}
