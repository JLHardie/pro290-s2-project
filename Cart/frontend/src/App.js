import './App.css';
import React, { useEffect, useState } from "react";
import DisplayCart from './components/DisplayCart'
import CartLink from './components/CartLink';
import LoginLink from './components/LoginLink';

function App() {
  const [total, setTotal] = useState(0)
  const [cartCount, setCartCount] = useState(0)

  return (
    <body>
      <header>
        <nav>
            <ul>
                <li id="list1"><a href="http://localhost:3000/" style={{color: "#f3e3e2"}}>Home</a></li>
                <li id="list2"><a href="http://localhost:3001/" style={{color: "#f3e3e2"}}>Inventory</a></li>
                <li id="list3"><a href="http://localhost:3004/" style={{color: "#f3e3e2"}}>Chat</a></li>
                <li id="list4"><a href="http://localhost:3005/" style={{color: "#f3e3e2"}}>Ticket</a></li>
                <LoginLink />
                <CartLink cartCount={cartCount} setCartCount={setCartCount}/>
            </ul>
        </nav>
      </header>
      <main>
        <div id='mar'>
        <DisplayCart setTotal={setTotal}/>
        </div>

        <CheckoutButton cartCount={cartCount}/>

        <h4>Total : {total}</h4>
      </main>
    </body>
  );
}

function CheckoutButton({cartCount}){

  const GoToCheckout = () => {
    if (cartCount > 0){
      window.location.href = "http://localhost:3003"
    }
  }
  return (
    <button style={{"margin-left": "40%"}} onClick={GoToCheckout} disabled={cartCount <= 0}>Checkout</button>
  )
}

export default App;
