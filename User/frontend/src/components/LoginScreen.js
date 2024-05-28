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
        <button onclick="verify();" style={{width: "10%", height:"40px"}}>Log In</button>
        <p>Or</p>
        <button style={{width: "10%", height:"40px"}} onClick={SwapScreens}>Sign Up</button>
    </>
    )
}

export default LoginScreen