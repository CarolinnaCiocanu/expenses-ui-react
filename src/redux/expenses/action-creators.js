import { types } from "./action-types";
import { routes } from "./routes";
import axios from "axios";

const { apiPath } = routes;

export const getExpenses = (params) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_EXPENSES });

    const data = await axios.get(apiPath + routes.expenses, {
      params: params,
    });

    console.log(data);

    dispatch({
      type: types.GET_EXPENSES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_EXPENSES_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addExpense = (params) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_EXPENSE });

    const data = await axios.put(apiPath + routes.expenses, {
      params: params,
    });

    dispatch({
      type: types.CREATE_EXPENSE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.CREATE_EXPENSE,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_EXPENSE });

    const data = await axios.delete(apiPath + routes.expenses, {
      params: {
        id: id,
      },
    });

    dispatch({
      type: types.DELETE_EXPENSE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_EXPENSE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
