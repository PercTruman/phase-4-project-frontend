import React, {useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";


function Students() {
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")


    const navigate = useNavigate();
    let { id} = useParams()

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




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
  return (
    <div>Students
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
    </div>
  )
}

export default Students