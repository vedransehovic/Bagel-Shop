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
      let bagels = state.bagels;
      let bagel = action.payload;
      let newBagel = { ...bagel, ordered: bagel.ordered + 1 };
      let newBagels = bagels.filter((element) => element.name !== bagel.name);
      console.log(newBagels);
      newBagels.push(newBagel);
      return { ...state, bagels: newBagels };
    default:
      return { ...state };
  }
};
