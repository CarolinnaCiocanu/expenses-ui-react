import { combineReducers } from "redux";
import RolesReducer from "./roles/reducers";

const rootReducer = combineReducers({
  RolesReducer,
});

export default rootReducer;
