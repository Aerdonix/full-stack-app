import React from "react";
import { useState, useEffect } from "react";
import { readUser } from "../utils";

const ReadUser = () => {
    const [usernames, setUsernames] = useState()

    useEffect(()=> {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        let users = await readUser()
        setUsernames(users)
    }

    return (
        <div className='container'>
            {usernames?.length > 0
                ?(
                    <div className='usernames'>
                        {usernames.map((user)=>(
                            <h3>{user}</h3>
                        ))}
                    </div>
                ) : (
                    <h3>No users found</h3>
                )
            }
        </div>
    )

}

export default ReadUser