import React, { useState, useContext } from "react";
import Login from "./Login";
import { UserConsumer } from "../src/context/userContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(UserConsumer)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
        })
    })
       .then(res => res.json())
       .then(user => {
         if (!user.errors) {
            signup(user)
            navigate('/')
         } else {
            setUsername("")
            setPassword("")
            setPasswordConfirmation("")
            const errorLis = user.errors.map(e => <li>{e}</li>)
            setErrorsList(errorLis)
        }
    })
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                id = "username"
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
            />
             <input
                type="password"
                id = "password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
            />
             <input
                type="password"
                id = "passwordConfirmation"
                value = {passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
        </form>
    </div>
  );
};
