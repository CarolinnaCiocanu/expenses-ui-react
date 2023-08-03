import update from "immutability-helper";

export const getExpenses = (state, { data }) => {
  return update(state, { expenses: { $set: data } });
};

export const deleteExpense = (state, { data }) => {
  return update(state, {
    expenses: { $set: data?.expenses },
    message: { $set: data?.message },
  });
};

export const addExpense = (state, { data }) => {
  return update(state, {
    expenses: { $set: data?.expenses },
    message: { $set: data?.message },
  });
};
