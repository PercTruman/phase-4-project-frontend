import React, {useContext}  from 'react'
import { UserContext } from './context/userContext'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const {user, logout, loggedIn} = useContext(UserContext)}
    const navigate = useNavigate()

    const logoutUser = (user) => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(()=> {
            logout()
            navigate('/')
        })
    }

    if (loggedIn) {
        return (
            <div>
                <h3>Hello {user.name}</h3>
                <button onClick ={logoutUser}>Logout</button>
            </div>
        )
    }else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
            </div>
        )
    }
