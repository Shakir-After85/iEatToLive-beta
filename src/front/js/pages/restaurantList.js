import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const RestaurantList = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className=" mt-5 container">
      <h1 className="bg-white text-center  ">{params.city} Restaurants</h1>

      <ul className="p-0">
        {store.restaurants.map((restaurant, index) => {
          return (
            <li className="card flex-row my-2">
              <div className="w-25">
                <img
                  src={restaurant.img_link}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="w-75">
                <div className="card-body">
                  <h4 className="card-title">{restaurant.name}</h4>
                  <h6 className="card-text">{restaurant.address}</h6>
                  <p className="card-text">
                    <i class="fa-solid fa-star"></i>
                    {restaurant.rating}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantList;
