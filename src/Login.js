import React, {useContext} from "react";
import { UserContext } from "./context/UserContext";

const Login = () => {
  const {email, setEmail, password, setPassword} = useContext(UserContext)
  
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
    </div>
  );
};

export default Login;
