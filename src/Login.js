import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const { email, setEmail, password, setPassword, login, errorsList, setErrorsList } =
    useContext(UserContext);

    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login")
      .then((res) => res.json())
      .then((teacher) => {
        if (!teacher.errors) {
          login(teacher);
          navigate("/home");
        } else {
          const errorLis = teacher.errors.map((e) => <li>{e}</li>);
          setErrorsList(errorLis);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Component</h2>
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
        <button type="submit">Log In</button>
      </form>
      <ul>{errorsList}</ul>
    </div>
  );
};

export default Login;
