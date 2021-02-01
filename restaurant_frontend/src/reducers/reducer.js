const initialState = {
  bagels: [],
  order: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BAGELS":
      return { ...state, bagels: action.payload };
    case "FAVORITE":
      return { ...state };

    case "ADDTOORDER":
      let bagels = [...state.bagels];
      let bagel = { ...action.payload.bagel };
      let order = state.order;
      let i = action.payload.index;
      let newBagel = { ...bagel, ordered: bagel.ordered + 1 };
      let newBagels = [...bagels.slice(0, i), newBagel, ...bagels.slice(i + 1)];
      order.push(newBagel);
      return { ...state, bagels: newBagels, order: order };

    case "REMOVEFROMORDER":
      let bagels_ = [...state.bagels];
      let bagel_ = { ...action.payload.bagel };
      let i_ = action.payload.index;
      let newBagel_ = { ...bagel_, ordered: bagel_.ordered - 1 };
      let newBagels_ = [
        ...bagels_.slice(0, i_),
        newBagel_,
        ...bagels_.slice(i_ + 1),
      ];
      return { ...state, bagels: newBagels_, order: newBagel_ };

    case "LIKE":
      let iLike = action.payload.index;
      let bagelsLike = [...state.bagels];
      let bagelLike = { ...action.payload.bagel };
      let likedBagel = { ...bagelLike, likes: bagelLike.likes + 1 };
      let likedBagels = [
        ...bagelsLike.slice(0, iLike),
        likedBagel,
        ...bagelsLike.slice(iLike + 1),
      ];
      return { ...state, bagels: likedBagels };

    default:
      return { ...state };
  }
};
