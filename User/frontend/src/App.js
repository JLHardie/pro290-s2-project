import './App.css';
import React, { useState } from 'react'
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import GoHome from './components/GoHome';

function App() {
  const [isLogin, setLogin] = useState(true)
  
  function SwapScreens() {
    setLogin(!isLogin)
  }

  return (
    <body>
      {isLogin ? 
      (<LoginScreen SwapScreens={SwapScreens}/>) :
      (<SignupScreen SwapScreens={SwapScreens} />) 
      }
      <p>Or</p>
      <GoHome />
    </body>
  );
}

export default App;


