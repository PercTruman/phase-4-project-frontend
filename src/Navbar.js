import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout, loggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = (user) => {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
      navigate("/");
    });

    if (loggedIn) {
      return (
        <div>
          <h3>Hello {user.name}</h3>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button>Signup</button>
          </NavLink>
        </div>
      );
    }
  };
};

export default Navbar
