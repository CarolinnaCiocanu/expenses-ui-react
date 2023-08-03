import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getRoles, deleteRole } from "../../redux/roles/action-creators";

const Roles = () => {
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.RolesReducer);

  useEffect(() => {
    dispatch(getRoles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteRoleHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteRole(id));
    }
  };

  return (
    <div className="container roles">
      <h1 className="title">Roles</h1>
      <ul>
        {roles.length > 0 &&
          roles.map((role) => {
            return (
              <li key={role.id} className="item">
                <span>
                  {role.title} - {role.id}
                </span>
                <button
                  onClick={() => deleteRoleHandler(role.id)}
                  className="delete btn"
                >
                  Remove
                </button>
              </li>
            );
          })}
      </ul>
      <NavLink className="add lg btn" to="/role/add">
        Add Role
      </NavLink>
    </div>
  );
};

export default Roles;
