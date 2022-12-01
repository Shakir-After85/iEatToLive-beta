import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { HomeByCity } from "../component/HomebyCity";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  switch (params.city) {
    case "ny-city":
      return <HomeByCity lat={40.73061} lng={-73.935242} zoom={10} city="NY" />;
    case "miami":
      return (
        <HomeByCity lat={25.761681} lng={-80.191788} zoom={10} city="Miami" />
      );
    case "atlanta":
      return (
        <HomeByCity lat={33.753746} lng={-84.38633} zoom={10} city="ATL" />
      );
    default:
      return <Link to="/">Choose a city</Link>;
  }
};
