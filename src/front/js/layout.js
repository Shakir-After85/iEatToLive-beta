import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";

import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CitySelector } from "./pages/citySelector";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Recipes } from "./pages/recipes";

import { FoodNews } from "./pages/foodNews";
import { InformVids } from "./pages/informVids";
import { RestaurantsGa } from "./pages/restaurantsGa";
import { RestaurantsNy } from "./pages/restaurantsNy";
import { Motivation } from "./pages/motivation";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<CitySelector />} path="/city-selector" />
            <Route element={<Home />} path="/home/:city" />
            <Route element={<Recipes />} path="/recipes" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Login />} path="/" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<FoodNews />} path="/food-news" />
            <Route element={<InformVids />} path="/informative-videos" />
            <Route element={<RestaurantsGa />} path="/restaurants-georgia" />
            <Route element={<RestaurantsNy />} path="/restaurants-Newyork" />
            <Route element={<Motivation />} path="/motivation" />

            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
