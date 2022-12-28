const getState = ({ getStore, getActions, setStore }) => {
  let backendUrl = process.env.BACKEND_URL;
  return {
    store: {
      recipes: [],

      user: null,
    },
    actions: {
      getRecipes: async () => {
        fetch(backendUrl + "/api/recipes")
          .then((response) => response.json())
          .then((data) => setStore({ recipes: data.recipes }))
          .catch((error) => console.log(error));
      },
      signup: async (data) => {
        fetch(backendUrl + "/api/signup", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            password: data.password,
          }),
        })
          .then((response) => response.json())
          .then((data) => setStore({ user: data.user }))
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
