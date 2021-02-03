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
      let order = [...state.order];
      //is that bagel already in the order?
      const alreadyInOrder = order.find(
        (orderedBagel) => orderedBagel.id === bagel.id
      );
      let i = action.payload.index;
      let newBagel = { ...bagel, ordered: bagel.ordered + 1 };
      let newBagels = [...bagels.slice(0, i), newBagel, ...bagels.slice(i + 1)];

      // if no, add it
      if (!alreadyInOrder) {
        order = [...order, { ...bagel, ordered: 1 }];
      } else {
        alreadyInOrder.ordered++;
      }

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
      return {
        ...state,
        bagels: newBagels_,
        order: [...state.order, newBagel_],
      };

    case "LIKE":
      let iLike = action.payload.index;
      let bagelsLike = [...state.bagels];
      let bagelLike = {...bagelsLike.find((bagel) => (bagel.id === action.payload.data.id))};
      bagelLike.likes++
      let likedBagels = [
        ...bagelsLike.slice(0, iLike),
        bagelLike,
        ...bagelsLike.slice(iLike + 1),
      ];
      return { ...state, bagels: likedBagels };

    default:
      return { ...state };
  }
};
