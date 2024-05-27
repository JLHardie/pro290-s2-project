import './App.css';
import React, { useEffect, useState } from "react";
import DisplayCart from './components/DisplayCart'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <body>
      <header>
        <nav>
            <ul>
                <li id="list1"><a href="http://localhost:3000/" style={{color: "#f3e3e2"}}>Home</a></li>
                <li id="list2"><a href="http://localhost:3001/" style={{color: "#f3e3e2"}}>Inventory</a></li>
                <li id="list3"><a href="http://localhost:3004/" style={{color: "#f3e3e2"}}>Chat</a></li>
                <li id="list4"><a href="http://localhost:3005/" style={{color: "#f3e3e2"}}>Ticket</a></li>
                <li id="list5" style={{float: "right"}}><a href="http://localhost:3006/" style={{color: "#f3e3e2"}}>Profile</a></li>
                <li id="list6" style={{float: "right"}}><a href="http://localhost:3002/" style={{color: "#f3e3e2"}}>Cart</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <div id='mar'>
        <DisplayCart setTotal={setTotal}/>
        </div>

        <button onClick={GoToCheckout}>Checkout</button>

        <h4>Total : {total}</h4>
      </main>
    </body>
  );
}

function GoToCheckout(){
  window.location.href = "http://localhost:3003"
}

export default App;
