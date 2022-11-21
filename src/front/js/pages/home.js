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
      return <HomeByCity city="NY" />;
    case "miami":
      return <HomeByCity city="Miami" />;
    case "atlanta":
      return <HomeByCity city="ATL" />;
    default:
      return <Link to="/">Choose a city</Link>;
  }
};
