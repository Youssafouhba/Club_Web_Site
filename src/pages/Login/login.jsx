import React from 'react'
import './css/login.css'
function Login() {
    return (
            <div className="container1" id="container">
                <div className="form-container1 sign-in-container1">
                    <form action="/main">
                        <h1>Sign in</h1>
                        <span style={{display: "none", color: "red"}} id="errorspan"
                        >Wrong Credentials, Please try again!</span
                        >
                        <span style={{display: "none", color: "green"}} id="redspan"
                        >Redirecting...</span>
                        <input type="email" placeholder="Email" id="maillogin"/>
                        <input type="password" placeholder="Password" id="passlogin"/>
                        <a href="/rest">Forgot your password?</a>
                        <button id="signinbtn" type={"submit"}>Sign In</button>
                    </form>
                </div>
            </div>

    )
}

export default Login