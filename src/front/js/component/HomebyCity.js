import React from "react";

export const HomeByCity = (props) => {
  return (
    <div className="bg-white text-center mt-5 mx-5 h-auto">
      <h1 className="home-title">iEat To Live {props.city}</h1>

      <p>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid justify-content-center">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search recipes, restaurants, meal plans, etc"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <img src="" />
      </p>
    </div>
  );
};
