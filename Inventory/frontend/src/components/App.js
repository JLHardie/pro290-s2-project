import '../css/App.css';
import React, {Suspense, useEffect, useState} from 'react';

import ShowInventory from './DisplayItems';
const getCookie = (name) => { 
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function App() {
  const [cartCount, setCartCount] = useState(0)
  const cartId = getCookie('cartId')
  
  const getCartCount = async () => { 
    if (cartId){
      const response = await fetch(`http://localhost:8080/cartService/${cartId}`)
      if (response.status === 200) {
        const json = await response.json()   
        setCartCount(json.body.items.length)
      } else {
        document.cookie = `cartId=`
      }
    } else {
      setCartCount(0)
    }
  }
  
  useEffect(() => {
    getCartCount()
  },[])

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
                <li id="list6" style={{float: "right"}}><a href={`http://localhost:3002/`}  style={{color: "#f3e3e2"}}>Cart {cartCount}</a></li>
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
