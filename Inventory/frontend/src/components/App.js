import '../css/App.css';
import React, {Suspense, useEffect, useState} from 'react';

import ShowInventory from './DisplayItems';
import CartLink from './CartLink';


function App() {
  const [cartCount, setCartCount] = useState(0)
  return (
    <>
      <header>
        <nav>
            <ul>
                <li id="list1"><a href="http://localhost:3000/" style={{color: "#f3e3e2"}}>Home</a></li>
                <li id="list2"><a href="http://localhost:3001/" style={{color: "#f3e3e2"}}>Inventory</a></li>
                <li id="list3"><a href="http://localhost:3004/" style={{color: "#f3e3e2"}}>Chat</a></li>
                <li id="list4"><a href="http://localhost:3005/" style={{color: "#f3e3e2"}}>Ticket</a></li>
                <li id="list5" style={{float: "right"}}><a href="http://localhost:3006/" style={{color: "#f3e3e2"}}>Profile</a></li>
                <CartLink setCartCount={setCartCount} cartCount={cartCount}/>
                
            </ul>
        </nav>
      </header>
      <main>
        <h1>Inventory</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <ShowInventory setCartCount={setCartCount}/>
        </Suspense>
      </main>
    </>
  );
}



export default App;
