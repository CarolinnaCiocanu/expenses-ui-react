import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRoles } from "../redux/roles/action-creators";

const Roles = () => {
  const [userRoles, setUserRoles] = useState([]);
  const [newRole, setNewRole] = useState("");
  const { roles } = useSelector((state) => state.RolesReducer);
  const dispatch = useDispatch();
  console.log("roles in component useSelector = ", roles);

  // const getRoles = async () => {
  //   // const response = await fetch(
  //   //   "http://localhost:5000/roles?" +
  //   //     new URLSearchParams({
  //   //       id: "2",
  //   //     })
  //   // );
  //   const response = await fetch("http://localhost:5000/roles", {
  //     method: "GET",
  //   });
  //   const roles = await response.json();

  //   setUserRoles(roles);
  // };

  useEffect(() => {}, []);

  const newRoleChangeHandler = (e) => {
    setNewRole(e.target.value);
  };

  const addNewRole = async (role) => {
    const response = await fetch("http://localhost:5000/roles", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: role,
      }),
    });
    const message = await response.json();

    alert(message);

    // getRoles();
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    addNewRole(newRole);
    setNewRole("");
  };

  const deleteRole = async (id) => {
    const response = await fetch("http://localhost:5000/roles", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });

    const message = await response.json();

    alert(message);

    // getRoles();
  };

  console.log(userRoles);

  const getRs = () => {
    dispatch(getRoles());
  };

  return (
    <div
      className="red"
      style={{
        maxWidth: "50vw",
        display: "block",
        margin: "0 auto",
        paddingTop: "100px",
      }}
    >
      <button onClick={getRs}>getRoles</button>
      <ul style={{ listStyle: "none", paddingLeft: "0", marginLeft: "0" }}>
        {userRoles.length > 0 &&
          userRoles.map((userRole) => {
            return (
              <li key={userRole.id}>
                <div
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    borderBottom: "1px solid #f4f4f4",
                    padding: "10px",
                  }}
                >
                  <span>
                    {userRole.title} - {userRole.id}
                  </span>
                  <button
                    onClick={() => deleteRole(userRole.id)}
                    style={{ cursor: "pointer" }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
      <form
        onSubmit={submitFormHandler}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "70px",
        }}
      >
        <input
          type="text"
          style={{ height: "40px", marginBottom: "20px" }}
          value={newRole}
          placeholder="Insert role"
          onChange={newRoleChangeHandler}
        />
        <button
          type="submit"
          style={{ cursor: "pointer", display: "block", marginLeft: "auto" }}
        >
          Add Role
        </button>
      </form>
    </div>
  );
};

export default Roles;
