import Home from "../pages/Home";
import ViewRoles from "../pages/Roles/ViewRoles";
import AddRole from "../pages/Roles/AddRole";
import EditRole from "../pages/Roles/EditRole";

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
];

export default routes;
