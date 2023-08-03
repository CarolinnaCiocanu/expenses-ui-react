import { types } from "./action-types";
import * as actions from "./actions";

const initialState = {
  roles: [],
};

export const RolesReducer = (state = initialState, result) => {
  const { type, payload } = result;

  console.log("RolesReducer type = ", result);

  switch (type) {
    case types.GET_ROLES_SUCCESS:
      return actions.getRoles(state, payload);
    default:
      return state;
  }
};

export default RolesReducer;
