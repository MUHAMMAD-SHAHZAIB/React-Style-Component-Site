export const Reducer = (state, action) => {
  switch (action.type) {
    case "Home_Update":
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
      };
    case "About_Update":
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
      };
  }
  return state;
};
