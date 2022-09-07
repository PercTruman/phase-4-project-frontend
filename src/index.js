import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContext } from "./context/userContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider>
      <Router>
        <App />
      </Router>
    </UserContext.Provider>
  </React.StrictMode>
);
