import { useState } from "react"

function LoginScreen({SwapScreens}){
    return (
      <>
        <h1>Login</h1>
        <label>Username: </label><br/>
        <input type="text" style={{width: "30%", height:"40px"}} id="username"/>
        <br/><br/>
        <label>Password: </label><br/>
        <input type="text" style={{width: "30%", height:"40px"}} id="password"/>
        <br/><br/>
        <p id='message'></p>
        <br/>
        <LoginButton />
        <p>Or</p>
        <button style={{width: "20%", height:"40px"}} onClick={SwapScreens}>Sign Up</button>
    </>
    )
}

function LoginButton(){
    const [isLoading, setLoading] = useState(false)
    const Login = async () => {
        try {
        setLoading(true)
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        let auth = `Basic ${btoa(username + ":" + password)}`
        const response = await fetch(`http://localhost:8080/userService/username/${username}`,
            {
                method: "GET",
                headers: {
                    Authorization: auth
                }
            }
        )
        if (response.status === 200) {
            document.cookie = `auth=${auth}`
            let user = await response.json()
            document.cookie = `userId=${user.userId}`
            window.location.href = 'http://localhost:3000'
        } else {
            document.getElementById('message').textContent = "Invalid Credentials"
        }
        } catch (error) {
            console.error(error)
        } finally { 
            setLoading(false)
        }
    }

    return ( 
        <button onClick={Login} disabled={isLoading} style={{width: "20%", height:"40px"}}>Log In</button>
    )
}

export default LoginScreen