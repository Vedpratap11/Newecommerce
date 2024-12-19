import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
function Register() {

    const [data, setData] = useState({ username: "", email: "", password: "" })

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )
        await updateProfile(userCredentials.user, { displayName: data.username })
    }

    return (
        <>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" value={data.username} onChange={handleChange} />
                <br />
                <input type="email" name="email" placeholder="xyz@gmail.com" value={data.email} onChange={handleChange} />
                <br />
                <input type="password" name="password" placeholder="password" value={data.password} onChange={handleChange} />
                <br />
                <button type="submit">Register</button>
            </form>
            <Link to="/login">Existing User? Login</Link>
        </>
    )
}

export default Register