import { types } from "./action-types";
import * as actions from "./actions";

const initialState = {
  expenses: [],
  message: "",
};

export const ExpensesReducer = (state = initialState, result) => {
  const { type, payload } = result;

  switch (type) {
    case types.GET_EXPENSES_SUCCESS:
      return actions.getExpenses(state, payload);
    case types.DELETE_EXPENSE_SUCCESS:
      return actions.deleteExpense(state, payload);
    default:
      return state;
  }
};

export default ExpensesReducer;
