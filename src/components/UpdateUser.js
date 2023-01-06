import React from "react";
import { useState } from "react";
import { updateUser } from '../utils';

const UpdateUser = ({user}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const updateUsername = async (event) => {
        event.preventDefaultt()
        await updateUser(user, "username", username)
    } 

    const updateEmail = async (event) => {
        event.preventDefaultt()
        await updateUser(email, "email", email)
    } 

    const updatePassword = async (event) => {
        event.preventDefaultt()
        await updateUser(password, "password", password)
    }

    return(
        <div className="container">
            <form onSubmit={updateUsername}>
                <label>Update Username
                <input onChange={(event) => setUsername(event.target.value)}></input>
                </label>
                <button type='submit'>Update Username</button>
            </form>

            <form onSubmit={updateEmail}>
                <label>Update Username
                <input onChange={(event) => setEmail(event.target.value)}></input>
                </label>
                <button type='submit'>Update Username</button>
            </form>

            <form onSubmit={updatePassword}>
                <label>Update Username
                <input onChange={(event) => setPassword(event.target.value)}></input>
                </label>
                <button type='submit'>Update Username</button>
            </form>

        </div>
    )
}

export default UpdateUser