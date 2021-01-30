import { combineReducers } from "redux";
import reducer from "./reducer";
import order from "./orderReducer";

const allReducers = combineReducers({
  bagels: reducer,
});

export default allReducers;
