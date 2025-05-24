import { useEffect, useState } from "react"
import { useUser } from "../../context/context"
import axios from "axios"
import { Outlet } from "react-router-dom"
import Spinner from "../../extra/Spinner"

const PrivateUser = () =>{
    const [ok ,setOk] = useState(false)
    const [user] = useUser()

    useEffect(()=>{
        
        const UserCheck = async() =>{
            const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user-verify`)

            if (res.data.ok) {
                setOk(true)
            }else{
                setOk(false)
            }
        }

        if (user?.token) {
            UserCheck()
        }
    } ,[user?.token])

    return ok ? <Outlet/> : <Spinner/>
}

export default PrivateUser