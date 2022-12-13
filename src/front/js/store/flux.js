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
    },
    actions: {},
  };
};

export default getState;
