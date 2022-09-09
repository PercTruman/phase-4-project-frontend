import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Welcome from "./Welcome";
import Signup from "./Signup";
import Students from "./Students";
// import { UserContext } from "./context/UserContext";

function App() {
  // const context = useContext(UserContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
