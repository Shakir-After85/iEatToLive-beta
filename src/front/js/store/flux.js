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
      //fetching Data from backend
      getFavoritesData: () => {
        let userObj = JSON.parse(sessionStorage.getItem("iEatToLive_user"));

        fetch(`${base_url}/api/list_favorites/user/${userObj.id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ Data: data });
          })
          .catch((error) => console.log("Error message from backend", error));
      },
      addFavorite: (recipes) => {
        let userObj = JSON.parse(sessionStorage.getItem("iEatToLive_user"));
        let user_id = userObj["id"];
        let recipes_id = recipes["id"];

        let payload = {
          recipes: recipes,
        };
        console.log("Payload: ", payload);

        return fetch(`${base_url}/api/list_favorites/user/${user_id}`, {
          method: "PUT",

          // headers: {
          // 	"Content-Type": "application/json"
          // },
          body: JSON.stringify(payload),
        })
          .then((res) => {
            // if (!res.ok) throw new Error(res.statusText);
            return res.json();
          })
          .then((data) =>
            setStore({
              user: {
                ...data.user,
                loggedIn: true,
              },
            })
          );
      },
    },
  };
};

export default getState;
