import React, { useState, useEffect, useContext} from 'react'
import { UserContext } from "./context/UserContext";
import {useNavigate} from "react-router-dom"


function Assignments() {
    const {user, logout} = useContext(UserContext)
    const [myAssignments, setMyAssignments] = useState([]);
    let navigate = useNavigate()

    const logoutUser = (user) => {
        fetch("/logout", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }).then(() => {
          logout();
          navigate("/");
        });
      }

    useEffect(() => {
        if (user) {
          fetch(`/teachers/${user.id}/assignments`)
            .then((res) => res.json())
            .then((data) => {
              setMyAssignments(data.map((a) => <li key={a.id}>{a.title}</li>));
            });
        }
      }, [user]);
  return user?(
    
    <div>
        <ul>{user.first_name}'s Assignments:</ul>
      {myAssignments}
      <button onClick={logoutUser}>Logout</button>
    </div>

  )
  : null;
}

export default Assignments