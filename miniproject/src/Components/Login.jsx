import React, { useContext, useState } from 'react'
import UserContext from '../context/useContext'

const Login = () => {
    const [username,setusername] =  useState("")
    const [password,setpassword] = useState("")
    const {setuser} = useContext(UserContext)

   const handleSubmit=(e)=>{
e.preventDefault()
setuser({username,password})
   }
  return (
    <div>
        <h2>Login </h2>
        <input type="text" placeholder='enter username...' value={username} onChange={(e)=>setusername(e.target.value)} />
        <input type="text" placeholder='enter password...' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login