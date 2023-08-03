import App from "../App";
import Roles from "../pages/Roles";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/roles",
    element: <Roles />,
  },
];

export default routes;
