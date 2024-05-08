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
      <div class="split left">
          <div class="ticket" id="ticket1">
            <h2>Ticket 1</h2>
            <h4>[status]</h4>
            <h4>[insert issue here]</h4>
          </div>
          <br/>
          <div class="ticket" id="ticket2">
            <h2>Ticket 2</h2>
            <h4>[status]</h4>
            <h4>[insert issue here]</h4>
          </div>
      </div>
      <div class="split right">
        <div class="centered">
          <h2>Ticket Details</h2>
          <p>Select a ticket to view details.</p>
        </div>
      </div>
    </main>
  </body>
  );
}

export default App;
