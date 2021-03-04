import { combineReducers } from "redux";
import config from "./templateConfigReducer";
import Navigation from "./navigationsReducer";

const rootReducer = combineReducers({
  config,
  Navigation,
});

export default rootReducer;
