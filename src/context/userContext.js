import React, { useState, useEffect, createContext } from "react";

const UserContext = createContext();

// Provider---"children in this case refers to App component"
function UserProvider({ children }) {   
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorsList, setErrorsList] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        data.error ? setLoggedIn(false) : setLoggedIn(true);
      });
  }, []);

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
    <UserContext.Provider value={{ user, login, logout, signup, setEmail, setPassword, loggedIn, errorsList, setErrorsList }}>
      {children}
    </UserContext.Provider>
  );
}

// const UserConsumer = UserContext.Consumer; 
export { UserContext, UserProvider };
