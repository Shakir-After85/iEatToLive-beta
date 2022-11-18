import React from "react";
import "../../styles/citySelector.css";
import { Link } from "react-router-dom";

export const CitySelector = () => {
  return (
    <div className="row container text-center mx-auto mt-5 bg-white main">
      <div className="col-4 ">
        <Link className="citySelection" to="/home/ny-city">
          <img
            className="img-fluid img-center"
            src="https://media.istockphoto.com/id/1169074379/photo/the-statue-of-liberty-with-the-one-world-trade-building-center-over-hudson-river-and-new-york.jpg?s=612x612&w=0&k=20&c=iWNDPCFj4v8uyXb_L-EV35yqmNJAJNpB4nFDqZNdIRc="
          />
          <h1>NY City</h1>
        </Link>
      </div>
      <div className="col-4 ">
        <Link className="citySelection" to="/home/atlanta">
          <img
            className="img-fluid img-center"
            src="https://www.gpb.org/sites/default/files/styles/three_two_702x468/public/npr_story_images/2020/07/14/Atlanta_0.jpg?h=27175dd2&itok=l8qkf2MB"
          />
          <h1>Atlanta</h1>
        </Link>
      </div>
      <div className="col-4 ">
        <Link className="citySelection" to="/home/miami">
          <img
            className="img-fluid img-center"
            src="https://media.istockphoto.com/id/1202852911/photo/miami-downtown-skyline-with-palm-trees-elevated-view.jpg?s=612x612&w=0&k=20&c=J0AQuK3MUkBHqU0x5WpdgugJ6FQ4mgD7FV87kQNCaSg="
          />
          <h1>Miami</h1>
        </Link>
      </div>
    </div>
  );
};
