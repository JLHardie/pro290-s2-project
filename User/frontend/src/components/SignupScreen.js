import { useState } from "react"

function SignupScreen({SwapScreens}){
    return (
      <>
        <h1>Create An Account</h1>
        <label>Username: </label><br/>
        <input type='text'style={{width: "30%", height:"40px"}} id="username"/>
        <br/><br/>
        <label>Password: </label><br/>
        <input type="text" style={{width: "30%", height:"40px"}} id="password"/>
        <br/><br/>
        <label>Email: </label><br/>
        <input type="text" style={{width: "30%", height:"40px"}} id="email"/>
        <br/>
        <p id="message"></p>
        <br/><br/>
        <CreateAccountButton SwapScreens={SwapScreens} />
        <p>Or</p>
        <button style={{width: "20%", height:"40px"}} onClick={SwapScreens}>Sign In</button>
      </>
    )
  }



function CreateAccountButton({SwapScreens}){
    const [isLoading, setLoading] = useState(false)
    const CreateAccount = async () => {
        try{
            setLoading(true)
            let username = document.getElementById('username').value
            let password = document.getElementById('password').value
            let email = document.getElementById('email').value
            if (!username || !password || !email) {
                document.getElementById('message').textContent = "Fill out all fields"
                return
            }
            let user = {
                'username': username,
                'password': password,
                'email' : email
            } 
            let requestBody = JSON.stringify(user)
            let response = await fetch('http://localhost:8080/userService', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: requestBody
            })
            let json = await response.json()
            if (response.status === 201) {
                document.getElementById('username').value = ""
                document.getElementById('password').value = ""
                document.getElementById('email').value = ""
                document.getElementById('message').textContent = "Account Created! Redirecting to login...."
                setTimeout(SwapScreens, 3000)
            } else if (response.status === 409){
                document.getElementById('message').textContent = json.message
                if (json.message.match("Username")){
                    document.getElementById('username').value = ""
                } else {
                    document.getElementById('email').value = ""
                }
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <button onClick={CreateAccount} style={{width: "20%", height:"40px"}} disabled={isLoading}>Create Account</button>
    )

  }

  export default SignupScreen