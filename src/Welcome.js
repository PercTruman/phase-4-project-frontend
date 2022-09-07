import React from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    let navigate = useNavigate();
  return (
    <div>Welcome to Class-ify, your hub for students and their assignments.
        Please login or signup.
        <button onClick = {()=> navigate('/login')}>Login</button>
        <button onClick = {()=> navigate('/signup')}>SignUp</button>
    </div>
  )
}

export default Welcome