import { types } from "./action-types";
import { routes } from "./routes";
import axios from "axios";

const { apiPath } = routes;

export const getRoles = (params) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_ROLES });

    const data = await axios.get(apiPath + routes.roles, {
      params: params,
    });

    dispatch({
      type: types.GET_ROLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_ROLES_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteRole = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_ROLE });

    const data = await axios.delete(apiPath + routes.roles, {
      params: {
        id: id,
      },
    });

    dispatch({
      type: types.DELETE_ROLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_ROLE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addRole = (title) => async (dispatch) => {
  console.log(title);

  try {
    dispatch({ type: types.CREATE_ROLE });

    const data = await axios.put(apiPath + routes.roles, {
      params: {
        title: title,
      },
    });

    dispatch({
      type: types.CREATE_ROLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.CREATE_ROLE_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
