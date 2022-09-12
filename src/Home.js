import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Navbar from "./Navbar";

const Home = () => {
  const [myStudents, setMyStudents] = useState([]);

  const { user, loggedIn } = useContext(UserContext);

  const navigate = useNavigate();
  let { id} = useParams()

const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
});


const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  useEffect(() => {
    if (user) {
      fetch(`/teachers/${user.id}/students`)
        .then((res) => res.json())
        .then((data) => {
          setMyStudents(
            data.map((s) => (
              <li key={s.id}>
                {s.first_name} {s.last_name}
              </li>
            ))
          );
        });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if (res.ok) {
        res.json().then(
          navigate(`/teachers/${id}/students`)
        );
      } else {
        res.json().then((errors) => {
          alert(errors.error);
        });
      }
    }
  )};

  return user ? (
    <div>
      <Navbar />
      <h3>{user.first_name}'s Homepage</h3>
      <form onSubmit={handleSubmit}>
        <h2>Add Student to Class</h2>
        <label>First Name:</label>
        <input
          name="firstName"
          type="text"
          autoComplete="on"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />{" "}
        <br />
        <label>Last Name:</label>
        <input
          name="lastName"
          type="lastName"
          autoComplete="on"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add Student</button>
      </form>
      <ul>My Students:</ul>
      {myStudents}
    </div>
  ) : (
    <div>
      <h2>Loading Students...</h2>
    </div>
  );
};

export default Home;
