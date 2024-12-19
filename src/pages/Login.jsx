import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <form action="">
        <input type="text" />
        <Link to="/register">Not Existing User? Register</Link>
    </form>
  )
}

export default Login
