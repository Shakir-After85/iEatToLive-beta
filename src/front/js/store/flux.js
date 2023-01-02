const getState = ({ getStore, getActions, setStore }) => {
  // let backendUrl=
  return {
    store: {
      recipes: [],
      restaurants: [
        {
          name: "Tony's Pizza and Deli",
          address: "Georgia, ATL",
          phone: "555-555-5555",
          hours: "8:00 am - 9:00 pm",
          Menu: [],
          services: "Dine-in and take-out",
          rating: "4.2",
          img_link:
            "https://media.cntraveler.com/photos/5a8453eb86e4b63c297d47fb/16:9/w_2560,c_limit/Tony%E2%80%99s-Pizza-Napoletana_Tony-Gemignani_2018_Tonys_Exterior_sign.jpg",
        },
        {
          name: "Tacos Manuel",
          address: "Georgia, ATL",
          phone: "555-555-5555",
          hours: "11:00 am - 9:00 pm",
          Menu: [],
          services: "Dine-in and take-out",
          rating: "4.5",
          img_link:
            "https://s3-media0.fl.yelpcdn.com/bphoto/4CmHQiflbfNTTz--HfzAyg/348s.jpg",
        },
        {
          name: "Piñones",
          address: "Georgia, ATL",
          phone: "555-555-5555",
          hours: "8:00 am - 9:00 pm",
          Menu: [],
          services: "Dine-in and take-out",
          rating: "4.2",
          img_link:
            "https://media-cdn.tripadvisor.com/media/photo-s/07/7d/a7/32/waterfront-lo-mejor.jpg",
        },
      ],

      user: null,
    },
    actions: {
      getRecipes: async () => {
        fetch(
          "https://3001-shakirafter-ieattoliveb-tovxv2gettq.ws-us80.gitpod.io/api/recipes"
        )
          .then((response) => response.json())
          .then((data) => setStore({ recipes: data.recipes }))
          .catch((error) => console.log(error));
      },
      findRestaurants: (queryParameters) => {
        let milesToKm = getActions().milesToKm;
        fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=vegan&location=${
            queryParameters.lat
          }%2C${queryParameters.lng}&radius=${milesToKm(
            queryParameters.miles
          )}&type=restaurant&key=AIzaSyCa1yoVQ6mqB2kjzQ8zYVmTE2nXL78_W0M`
        )
          .then((response) => response.json())
          .then((data) => setStore({ restaurants: data.results }));
      },
      milesToKm: (miles) => {
        return miles * 1.609344;
      },

      signup: async (data) => {
        fetch(
          "https://3001-shakirafter-ieattoliveb-tovxv2gettq.ws-us80.gitpod.io/api/signup",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
          }
        )
          .then((response) => response.json())
          .then((data) => setStore({ user: data.user }))
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
