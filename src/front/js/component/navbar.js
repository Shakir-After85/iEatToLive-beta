import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-warning">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">iEatToLive </span>
        </Link>
        <span> Healthier Life. Better Living </span>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Login/Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
