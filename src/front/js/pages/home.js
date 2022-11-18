import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="bg-white text-center mt-5 mx-5 h-auto">
      <h1>iEat To Live</h1>

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
