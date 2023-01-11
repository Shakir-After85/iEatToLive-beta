const getState = ({ getStore, getActions, setStore }) => {
  let backendURL = process.env.BACKEND_URL;
  let apiKey = process.env.GOOGLE_API_KEY;
  return {
    store: {
      recipes: [],
      restaurants: [],

      user: null,
    },
    actions: {
      getRecipes: async () => {
        fetch(backendURL + "/api/recipes")
          .then((response) => response.json())
          .then((data) => setStore({ recipes: data.recipes }))
          .catch((error) => console.log(error));
      },
      findRestaurants: async (queryParameters) => {
        let milesToKm = getActions().milesToKm;

        // fetch(
        //   "https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=" +
        //     queryParameters.keyword +
        //     "&location=" +
        //     queryParameters.lat +
        //     "%2C" +
        //     queryParameters.lng +
        //     "&radius=" +
        //     milesToKm(queryParameters.miles) +
        //     "&type=restaurant&key=" +
        //     apiKey
        // )
        //   .then((response) => response.json())
        //   .then((result) => console.log(result))
        //   .catch((error) => console.log("error", error));

        // fetch(
        //   "https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=vegan&location=33.753746%2C-84.38633&radius=40233.600000000006&type=restaurant&key=AIzaSyCa1yoVQ6mqB2kjzQ8zYVmTE2nXL78_W0M"
        // )
        //   .then((response) => response.text())
        //   .then((result) => console.log(result))
        //   .catch((error) => console.log("error", error));

        // try {
        //   let data = await fetch(
        //     "https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=" +
        //       queryParameters.keyword +
        //       "&location=" +
        //       queryParameters.lat +
        //       "%2C" +
        //       queryParameters.lng +
        //       "&radius=" +
        //       milesToKm(queryParameters.miles) +
        //       "&type=restaurant&key=" +
        //       apiKey
        //   );
        //   console.log(data);
        // } catch {
        //   (e) => console.log(e.message);
        // }
      },
      milesToKm: (miles) => {
        return miles * 1.609344 * 1000;
      },

      signup: async (data) => {
        fetch(backendURL + "/api/signup", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => setStore({ user: data.user }))
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
