import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/roles">Roles</NavLink>
      </li>
      <li>
        <NavLink to="/themes">Themes</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
