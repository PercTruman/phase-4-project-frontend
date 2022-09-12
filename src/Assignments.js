import React, { useState, useEffect, useContext} from 'react'
import { UserContext } from "./context/UserContext";


function Assignments() {
    const {user} = useContext(UserContext)
    const [myAssignments, setMyAssignments] = useState([]);

    useEffect(() => {
        if (user) {
          fetch(`/teachers/${user.id}/assignments`)
            .then((res) => res.json())
            .then((data) => {
              setMyAssignments(data.map((a) => <li key={a.id}>{a.title}</li>));
            });
        }
      }, [user]);
  return (
    <div>
        <ul>My Assignments:</ul>
      {myAssignments}
    </div>

  )
}

export default Assignments