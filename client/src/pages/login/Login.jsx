import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import "./Login.css"

const Login = () => {
    
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const {loading, error, dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setCredentials((prevState)=>({...prevState, [e.target.id]: e.target.value}))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.get("/auth/login", credentials)
            dispatch({type:"LOGIN_SUCCESS", payload: res.data})
            navigate("/")
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE", payload: error.response?.data})
        }
    }

  return (
    <div className="login">
        <div className="lContainer">
            <input type="text" placeholder="Enter username" id="username" onChange={handleChange} className="lInput" />
            <input type="password" placeholder="Enter password" id="password" onChange={handleChange} className="lInput" />
            <button disabled={loading} className="lButton" onClick={handleLogin}>Login</button>
            {error&&
            <span>
                {error.message}
            </span>
            }
        </div>
      
    </div>
  )
}

export default Login
