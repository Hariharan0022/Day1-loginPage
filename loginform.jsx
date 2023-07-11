import React, {useState } from "react";
import "./loginform.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () =>{
    const navigate=useNavigate();
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        navigate('/dashboard')
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)

    }
    return (
        <div className="body">
            
        <center><div className="cover">
        
            <h1>Employee Login</h1>
            <h3>USERNAME</h3>
            <input type="text" placeholder="username" />
            <h3>PASSWORD</h3>
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>


            

            <div className="alt-login">
                <div cLassName="google"></div>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>username or password incorrect...</p>
            </div>
        </div></center>
        </div>
    )
}
export default LoginForm