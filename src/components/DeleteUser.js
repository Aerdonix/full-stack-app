import React from "react";
import { deleteUser } from '../utils'

const DeleteUser = ({user}) => {

    const deleteAccount = async () => {
        await deleteUser(user)
        let name = 'jwt_token'
        document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 UTC;'
    }

    return(
        <form onSubmit={deleteAccount}>
            <button type="submit">Delete Account</button>
        </form>
    )
}
export default DeleteUser