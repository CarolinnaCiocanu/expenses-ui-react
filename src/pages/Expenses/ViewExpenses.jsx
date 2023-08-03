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
      <table>
        <thead>
          <tr>
            <td>
              <th>Title</th>
            </td>
            <td>
              <th>Description</th>
            </td>
            <td>
              <th>Amount</th>
            </td>
          </tr>
        </thead>
        <tbody>
          {expenses?.length > 0 &&
            expenses?.map((expense) => {
              return (
                <tr className="item">
                  <td>{expense.title}</td>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* <ul>
        {expenses?.length > 0 &&
          expenses?.map((expense) => {
            return (
              <li className="item">
                <span>{expense.title}</span>
                <span>{expense.description}</span>
                <span>{expense.amount}</span>
              </li>
            );
          })}
      </ul> */}
      <NavLink to="/expense/add" className="btn lg add">
        Add Expense
      </NavLink>
    </div>
  );
};

export default ViewExpenses;
