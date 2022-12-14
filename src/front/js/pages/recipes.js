import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Recipes = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="bg-white pb-5 mt-5 mx-5">
      <h1 className="text-center">Recipes</h1>

      <div className="list pt-2">
        {store?.recipes.map((item, index) => {
          return (
            <div className="card flex-row my-2">
              <div className="w-25">
                <img src={item.img_link} className="card-img-top" alt="..." />
              </div>

              <div className="w-75">
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <h6 className="card-text">{item.cook_time}</h6>
                  <p className="card-text">{item.description}</p>
                </div>
                {/* <ul className="list-group list-group-flush">
                  <li className="list-group-item">ingredient 1</li>
                  <li className="list-group-item">ingredient 2</li>
                  <li className="list-group-item">ingredient 3</li>
                </ul> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
