import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Signup from "./Signup";
import { UserContext } from "./context/UserContext";

function App() {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Navbar /> */}
    
    </div>
  );
}

export default App;
