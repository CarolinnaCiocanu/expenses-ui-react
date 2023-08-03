import { types } from "./action-types";
import * as actions from "./actions";

const initialState = {
  roles: [],
  message: "",
};

export const RolesReducer = (state = initialState, result) => {
  const { type, payload } = result;

  switch (type) {
    case types.GET_ROLES_SUCCESS:
      return actions.getRoles(state, payload);
    case types.DELETE_ROLE_SUCCESS:
      return actions.deleteRole(state, payload);
    default:
      return state;
  }
};

export default RolesReducer;
