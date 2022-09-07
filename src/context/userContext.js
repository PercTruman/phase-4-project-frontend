import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

// Provider
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Shawn",
    password: "password"
  });
  const [loggedIn, setLoggedIn] = useState(true);

  // useEffect(() => {
  //   fetch("/me")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUser(data);
  //       data.error ? setLoggedIn(false) : setLoggedIn(true);
  //     });
  // }, []);

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = (user) => {
    setUser({});
    setLoggedIn(false);
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup, loggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

const UserConsumer = UserContext.Consumer;
export { UserContext, UserProvider, UserConsumer };
