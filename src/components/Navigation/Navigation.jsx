import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/roles">Roles</NavLink>
        </li>
        <li>
          <NavLink to="/themes">Themes</NavLink>
        </li>
        <li>
          <NavLink to="/expenses">Expenses</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
