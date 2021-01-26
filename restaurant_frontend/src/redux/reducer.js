const initialState = {
  bagels: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BAGELS":
      return { ...state, bagels: action.payload.bagels };
    default:
      return { ...state };
  }
};
