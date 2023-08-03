import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getExpenses } from "../../redux/expenses/action-creators";

const ViewExpenses = () => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.ExpensesReducer);

  useEffect(() => {
    dispatch(getExpenses());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container expenses">
      <h1 className="title">Expenses</h1>
      <NavLink to="/expense/add" className="btn lg add">
        Add Expense
      </NavLink>
      <ul>
        {expenses?.length > 0 &&
          expenses?.map((expense) => {
            return (
              <li>
                <span>{expense.title}</span>
                <span>{expense.description}</span>
                <span>{expense.amount}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ViewExpenses;
