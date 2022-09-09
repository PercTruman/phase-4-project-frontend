import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { user, loggedIn } = useContext(UserContext);

  if (loggedIn) {
    return (
      <div>
        <Navbar />
      
        <h3>{user.first_name}'s Homepage</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please Login or SignUp</h3>
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

export default Home;
