import React from "react";
import { UserConsumer } from "../src/context/UserContext";

const Login = () => {
  return (
    <UserConsumer>{(context) => <h1> {context.user.name}</h1>}</UserConsumer>
  );
};

export default Login;
