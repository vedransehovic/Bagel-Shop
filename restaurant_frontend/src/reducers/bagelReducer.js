const initialState = {
    counter
}

export default function bagelReducer(state = [], action) {
  switch (action.type) {
    case "INCREASE":
      return state.order + 1;
    default:
      return state;
  }
}
