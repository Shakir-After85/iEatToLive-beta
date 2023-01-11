import React from "react";
import "../../styles/foodMarketGa.css";
import { Link } from "react-router-dom";

export const FoodMarketGa = () => {
  return (
    <div className="text-center bg-white">
      {/* <Link to="/restaurants/Atlanta"> link to restaurantList</Link> */}
      <div className=" ">
        <Link className="foodMarket" to="/">
          <img
            className="img-fluid img-center foodMarket-img"
            src="https://www.atlantaeats.com/wp-content/uploads/2022/05/brookhaven-farmers-market-600x400.jpg"
          />
          <h1 className="foodMarket-h1">Morningside Farmer's Market</h1>
        </Link>
      </div>
      <div className=" ">
        <Link className="foodMarket" to="/">
          <img
            className="img-fluid img-center foodMarket-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOrYMTFQShilcit5PTI0o9yuQPWwqgNrihw&usqp=CAU"
          />
          <h1 className="foodMarket-h1">Freedom Farmers Market</h1>
        </Link>
      </div>
      <div className=" ">
        <Link className="foodMarket" to="/">
          <img
            className="img-fluid img-center foodMarket-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOrYMTFQShilcit5PTI0o9yuQPWwqgNrihw&usqp=CAU"
          />
          <h1 className="foodMarket-h1">Grant Park Farmers Market</h1>
        </Link>
      </div>
    </div>
  );
};
