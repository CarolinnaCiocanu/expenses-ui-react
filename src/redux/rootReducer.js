import { combineReducers } from "redux";
import RolesReducer from "./roles/reducers";
import ExpensesReducer from "./expenses/reducers";

const rootReducer = combineReducers({
  RolesReducer,
  ExpensesReducer,
});

export default rootReducer;
