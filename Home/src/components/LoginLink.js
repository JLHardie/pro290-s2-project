import React, {useEffect, useState} from 'react';
const getCookie = (name) => { 
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
function LoginLink(){
    let userId = getCookie('userId')
    console.log(userId)
    let signedIn = userId ? true : false
    const [loggedIn, setLoggedIn] = useState(signedIn)
    const GoToLoginPage = () => {
        if (loggedIn) {
            document.cookie = "userId="
        } 
        window.location.href = 'http://localhost:3006'
    }

    return (
        <li id="list5" style={{float: "right"}}><a onClick={GoToLoginPage} style={{color: "#f3e3e2"}}>
            {loggedIn ? "Logout" : "Login"}
        </a></li>
    )
}

export default LoginLink