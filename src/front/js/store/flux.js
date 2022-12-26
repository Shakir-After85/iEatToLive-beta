const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      recipes: [
        {
          id: 1,
          name: "Thyme Steak",
          ingredients: [
            {
              name: "thyme",
              quantity: 1,
              unit: "tbsp",
            },
            {
              name: "New York strip steak",
              quantity: 1,
              unit: "N/A",
            },
            {
              name: "salt",
              quantity: 1,
              unit: "tbsp",
            },
            {
              name: "black pepper",
              quantity: 1,
              unit: "tbsp",
            },
          ],
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
