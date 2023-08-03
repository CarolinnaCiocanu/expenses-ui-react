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
