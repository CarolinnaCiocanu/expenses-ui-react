import update from "immutability-helper";

export const getRoles = (state, { data }) => {
  console.log("getRoles data action  = ", data);
  return update(state, { roles: { $set: data } });
};
