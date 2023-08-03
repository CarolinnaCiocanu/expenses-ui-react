import update from "immutability-helper";

export const getRoles = (state, { data }) => {
  return update(state, { roles: { $set: data } });
};

export const deleteRole = (state, { data }) => {
  return update(state, {
    roles: { $set: data?.roles },
    message: { $set: data?.message },
  });
};

export const addRole = (state, { data }) => {
  return update(state, {
    roles: { $set: data?.roles },
    message: { $set: data?.message },
  });
};
