import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const LoginContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        userDetail: null,
        token: ""
    })

    axios.defaults.headers.common['Authorization'] = user?.token

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userDetail'))
        if (data) {
            setUser({
                ...user,
                userDetail: data.user,
                token: data.token
            })
        }
        // eslint-disable-next-line
    }, [])

    return (
        <LoginContext.Provider value={[user, setUser]} >
            {children}
        </LoginContext.Provider>
    )
}

const useUser = () => useContext(LoginContext)

export { useUser, UserProvider }  