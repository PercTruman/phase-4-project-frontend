import React, { useState, useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { email, password, login, errorsList, setErrorsList } =
    useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((teacher) => {
          login(teacher);
          navigate("/home");
        });
      } else {
        res.json().then((errors) => {
          alert(errors.error);
        });
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Component</h2>
        <label>Email Address:</label>
        <input
          name="email"
          type="email"
          autoComplete="on"
          id="email"
          value={email}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Password:</label>
        <input
          name="password"
          type="password"
          autoComplete="on"
          id="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Log In</button>
      </form>
      <ul>{errorsList}</ul>
    </div>
  );
};

export default Login;
