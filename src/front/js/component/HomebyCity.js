import React, { useContext, useState } from "react";
// import Map from "./googlemap";
import { FoodMarketGa } from "../pages/foodMarketGa";
import { FoodMarketNY } from "../pages/foodMarketNY";
import { Context } from "../store/appContext.js";
import RestaurantList from "./restaurantList";

export const HomeByCity = (props) => {
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState("");
  const [miles, setMiles] = useState(25);
  const MarketChooser = () => {
    switch (props.city) {
      case "NY":
        return <FoodMarketNY />;
      case "ATL":
        return <FoodMarketGa />;
      default:
        return <div>Miami market coming soon</div>;
    }
  };

  function handleSearch() {
    actions.findRestaurants({
      keyword: input,
      lat: props.lat,
      lng: props.lng,
      miles: 25,
    });
  }
  return (
    <div className="bg-white text-center mt-5 mx-5 h-auto">
      <h1 className="home-title">iEatToLive {props.city}</h1>

      <p>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid justify-content-center">
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search recipes, restaurants, meal plans, etc"
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={() => handleSearch()}
                className="btn btn-outline-warning"
              >
                Search
              </button>
            </div>
          </div>
        </nav>
        <img src="" />
        <div className="row">
          <div className="col-8">
            {/* <Map lat={props.lat} lng={props.lng} zoom={props.zoom} /> */}
          </div>
          <div className="col">{/* <MarketChooser /> */}</div>
          <div>
            <RestaurantList city={props.city} />
          </div>
        </div>
      </p>
    </div>
  );
};
