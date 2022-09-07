import React, {useContext} from "react";
import { UserContext } from "./context/UserContext";

const Login = () => {
  const context = useContext(UserContext)
  console.log(context)
  return (
    <UserContext.Consumer>{(context) => <h1> {context.user.name}</h1>}</UserContext.Consumer>
  );
};

export default Login;
