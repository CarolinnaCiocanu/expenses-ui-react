import Home from "../pages/Home";
import ViewRoles from "../pages/Roles/ViewRoles";
import AddRole from "../pages/Roles/AddRole";
import EditRole from "../pages/Roles/EditRole";
import ViewExpenses from "../pages/Expenses/ViewExpenses";
import AddExpense from "../pages/Expenses/AddExpense";
import EditExpense from "../pages/Expenses/EditExpense";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/roles",
    element: <ViewRoles />,
  },
  {
    path: "/role/add",
    element: <AddRole />,
  },
  {
    path: "/role/:id",
    element: <EditRole />,
  },
  {
    path: "/expenses",
    element: <ViewExpenses />,
  },
  {
    path: "/expense/add",
    element: <AddExpense />,
  },
  {
    path: "/expense/:id",
    element: <EditExpense />,
  },
];

export default routes;
