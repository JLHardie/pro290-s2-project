import './App.css';

function App() {
  return (
    <body>
      <header>
        <nav>
            <ul>
                <li id="list1"><a href="home.html" style={{color: "#f3e3e2"}}>Home</a></li>
                <li id="list2"><a href="App.js" style={{color: "#f3e3e2"}}>Inventory</a></li>
                <li id="list3"><a href="deals.html" style={{color: "#f3e3e2"}}>Chat</a></li>
                <li id="list4" style={{float: "right"}}><a href="profile.html" style={{color: "#f3e3e2"}}>Profile</a></li>
                <li id="list5" style={{float: "right"}}><a href="C:\Users\kalawson\Documents\GitHub\pro290-s2-project\Cart\frontend\src\App.js" style={{color: "#f3e3e2"}}>Cart</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <input type="text" style={{width: "30%", height: "30px"}} id="name" placeholder='Name on Card'/>
        <br/>
        <input type="text" style={{width: "30%", height: "30px"}} id="number" placeholder='Card Number'/>
        <br/>
        <input type="text" style={{width: "14.8%", height: "30px"}} id="cvv" placeholder='CVV'/>
        <input type="text" style={{width: "14.8%", height: "30px"}} id="expiration" placeholder='Expiration'/>
        <br/>
        <input type="text" style={{width: "30%", height: "30px"}} id="address1" placeholder='Address Line 1'/>
        <br/>
        <input type="text" style={{width: "30%", height: "30px"}} id="address2" placeholder='Address Line 2'/>
        <br/>
        <input type="text" style={{width: "30%", height: "30px"}} id="zipcode" placeholder='Zip Code'/>
      </main>
    </body>
  );
}

export default App;
