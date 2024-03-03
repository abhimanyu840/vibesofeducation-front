import React, { useState, useEffect } from 'react'
import adminContext from './adminContext'

const AdminState = (props) => {
    const [token, setToken] = useState(null)

    const [isAdmin, setisAdmin] = useState(false)

    useEffect(() => {
        (async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/auth/getuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                },
            });
            const userData = await response.json()
            if (userData.isadmin) {
                setisAdmin(true)
            }
        })();

    }, [token])
    return (
        <adminContext.Provider value={{ isAdmin, setToken }}>
            {props.children}
        </adminContext.Provider>
    );
}

export default AdminState
