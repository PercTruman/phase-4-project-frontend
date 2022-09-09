import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import Navbar from "./Navbar";

const Home = () => {
  const [myStudents, setMyStudents] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    fetch(`/teachers/${user.id}/students`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMyStudents(
          data.map((s) => (
            <li key={s.id}>
              {s.first_name} {s.last_name}
            </li>
          ))
        );
      });
  },[]);

  return (
    <div>
      <Navbar />
      <h3>{user.first_name}'s Homepage</h3>
      <ul>My Students:</ul>
      {myStudents}
    </div>
  );
};

export default Home;
