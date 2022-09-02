import React, { useState, useContext } from "react";
import Login from "./Login";
import { UserConsumer } from "../src/context/userContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(UserConsumer)
    const navigate = useNavigate()

  return (
    <UserConsumer>
      <h3>Create account with email address and password</h3>
      {(context) => (
        <input
          type="email"
          onChange={handleChange}
          value={context.user.password}
        >
          Email
        </input>
      )}
      <Login />
    </UserConsumer>
  );
};
