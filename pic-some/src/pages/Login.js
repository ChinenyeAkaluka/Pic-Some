import React, {useState} from "react"
import {Link} from "react-router-dom"
import "../styles.css"
import {getClass} from "../utils"

function Login() {
    const [IsLogin, setIsLogin] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    function Login(){
        if(password != ""){
            setIsLogin(true)
            window.location.href = "/photos"
        }
        
    }

    function HandleUser(e){
        const {value} = e.target
        setUsername(value)

    }

    function HandlePass(e){
        const {value} = e.target
        setPassword(value)
        
    }

    function handleSubmit(e){
        if(password != ""){
            setIsLogin(true)
            window.location.href = "/photos"
        }
    }
    
    return (
        <main className="login">
            <form>
                <div className="login-div">
                    <input className="login-input1"
                        type="text" 
                        value={username} 
                        name="username" 
                        placeholder="Username" 
                        onChange={HandleUser}
                    >
                    </input>
                    <br/>
                    
                    <input className="login-input2"
                        type="text" 
                        value={password} 
                        name="password" 
                        placeholder="Password" 
                        onChange={HandlePass} 
                    >
                    </input>
                    <br/>

                    <Link to="/photos"><button className="login-button"> Login</button></Link>
                </div>
            </form>
            
        </main>
    )
}

export default Login