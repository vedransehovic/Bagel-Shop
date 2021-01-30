const initialState = {
  bagels: [],
  order: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BAGELS":
      return { ...state, bagels: action.payload };
    case "FAVORITE":
      return { ...state };
    case "ADDTOORDER":
      return { ...state, bagels: action.payload };
    default:
      return { ...state };
  }
};
