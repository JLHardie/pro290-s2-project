import React from "react";

function GoHome(){
    const  goHome = () => {
        window.location.href = "http://localhost:3000"
    }
    return (
        <button onClick={goHome} style={{width: "25%", height:"45px"}}>Continue as Guest</button>
    )
}

export default GoHome