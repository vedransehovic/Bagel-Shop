import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import bagelReducer from "./bagelReducer";

const allReducers = combineReducers({
  counter: bagelReducer,
  isLogged: loggedReducer,
});

export default allReducers;
