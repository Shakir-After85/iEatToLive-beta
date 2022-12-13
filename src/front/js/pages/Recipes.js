import React from "react";

export const Recipes = () => {
  return (
    <div className="bg-white pb-5 mt-5 mx-5">
      <h1 className="text-center">Recipes</h1>

      <div className="list pt-2">
        <div className="card flex-row my-2">
          <img
            src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/d9e900e4-212e-4c3d-96d5-cb14a023c659-worlds-most-delicious-dishes.jpg"
            className="card-img-top w-50"
            alt="..."
          />
          <div>
            {" "}
            <div className="card-body">
              <h5 className="card-title">Recipe Name</h5>
              <p className="card-text">Recipe description</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">ingredient 1</li>
              <li className="list-group-item">ingredient 2</li>
              <li className="list-group-item">ingredient 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
