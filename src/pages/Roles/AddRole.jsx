import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRole } from "../../redux/roles/action-creators";

const AddRole = () => {
  const [newRole, setNewRole] = useState("");
  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (newRole !== "") {
      dispatch(addRole(newRole));

      setNewRole("");
    }
  };

  const onInputChange = (e) => {
    setNewRole(e.target.value);
  };

  return (
    <div className="container roles">
      <h1 className="title">Add Role</h1>
      <NavLink to="/roles">Go Back</NavLink>
      <form onSubmit={submitFormHandler} className="roles-form">
        <input
          type="text"
          value={newRole}
          className="form-control"
          placeholder="Insert role"
          onChange={onInputChange}
        />
        <button type="submit" className="submit btn">
          Add Role
        </button>
      </form>
    </div>
  );
};

export default AddRole;
