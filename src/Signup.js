import React, { useState, useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.errors) {
          signup(user);
          navigate("/");
        } else {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setPasswordConfirmation("");
          const errorLis = user.errors.map((e) => <li>{e}</li>);
          setErrorsList(errorLis);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label>Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Password Confirmation:</label>
        <input
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <button type="submit">Add Teacher</button>
      </form>
      <ul>{errorsList}</ul>
    </div>
  );
};

export default Signup;
