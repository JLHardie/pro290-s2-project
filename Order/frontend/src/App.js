import './App.css';

function App() {
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
        <form>
          <input type="text" style={{width: "30%", height: "10%"}} id="name" placeholder='Name on Card'/>
          <br/>
          <input type="text" style={{width: "30%", height: "10%"}} id="number" placeholder='Card Number'/>
          <br/>
          <input type="text" style={{width: "14.8%", height: "10%"}} id="cvv" placeholder='CVV'/>
          <input type="text" style={{width: "14.8%", height: "10%"}} id="expiration" placeholder='Expiration'/>
          <br/>
          <input type="text" style={{width: "30%", height: "10%"}} id="address1" placeholder='Address Line 1'/>
          <br/>
          <input type="text" style={{width: "30%", height: "10%"}} id="address2" placeholder='Address Line 2'/>
          <br/>
          <input type="text" style={{width: "30%", height: "10%"}} id="zipcode" placeholder='Zip Code'/>
        </form>
        <button>Pay!</button>
        
      </main>
    </body>
  );
}

export default App;
