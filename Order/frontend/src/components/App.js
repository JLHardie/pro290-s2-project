import '../App.css';
import CartLink from './CartLink';
import React, { useState } from 'react'

import PayButton from './PayButton';
import LoginLink from './LoginLink';

function App() {
  const [orderPlaced, setOrderPlaced] = useState(false)
  
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
                <CartLink />
            </ul>
        </nav>
      </header>
      {
        orderPlaced ? 
        <SuccessPage />
        :
        <CreateOrder setOrderPlaced={setOrderPlaced}/>
      }
    </body>
  );
}

function SuccessPage(){
  return (
    <>
    <br/>
    <br/>
      <h1>Your order has been placed!</h1>
      <h2>Thank you for shopping with us!</h2>
    </>
  )
}

function CreateOrder({setOrderPlaced}) {
  return (
    <main>
    <form>
      <input type="text" style={{width: "30%", height: "10%"}} id="name" placeholder='Name on Card'/>
      <br/>
      <input type="text" style={{width: "30%", height: "10%"}} id="number" placeholder='Card Number'/>
      <br/>
      <input type="text" style={{width: "14.8%", height: "10%"}} id="cvv" placeholder='CVV'/>
      <input type="text" style={{width: "14.8%", height: "10%"}} id="expiration" placeholder='YYYY-MM-DD'/>
      <br/>
      <input type="text" style={{width: "30%", height: "10%"}} id="address1" placeholder='Address Line 1'/>
      <br/>
      <input type="text" style={{width: "30%", height: "10%"}} id="address2" placeholder='Address Line 2'/>
      <br/>
      <input type="text" style={{width: "30%", height: "10%"}} id="zipcode" placeholder='Zip Code'/>
    </form>
    <p id="message"></p>
    <PayButton setOrderPlaced={setOrderPlaced}/>
    
   </main>
  )
}

export default App;
