import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Home = () => {
  const { user, loggedIn } = useContext(UserContext);

  if (loggedIn) {
    return (
      <div>
        <h3>{user.name}'s Homepage</h3>
      </div>
    );
  } else {
    return <h3>Please Login or SignUp</h3>;
  }
};

export default Home