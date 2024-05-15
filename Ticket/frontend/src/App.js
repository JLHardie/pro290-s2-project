import './App.css';

function App() {
  return (
    <body>
      <header>
      <nav>
          <ul>
              <li id="list1"><a href="home.html" style={{color: "#f3e3e2"}}>Home</a></li>
              <li id="list2"><a href="http://localhost:3001" style={{color: "#f3e3e2"}}>Inventory</a></li>
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
            <h4>[insert issue here]</h4>
            <h4>[status]</h4>
          </div>
          <br/>
          <div class="ticket" id="ticket2">
            <h2>Ticket 2</h2>
            <h4>[insert issue here]</h4>
            <h4>[status]</h4>
          </div>
      </div>
      <div class="split right">
        <div class="centered">
          <div class="ticketDesc" id="desc1">
            <h1>[Issue Name]</h1>
            <h2>[status]</h2>
            <h2>[date]</h2>
            <p>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Cras a ultrices lacus. 
              Sed vel tortor ac ex luctus pretium. 
              Suspendisse bibendum, diam a venenatis 
              rutrum, libero mauris auctor est, id malesuada 
              mi orci vel ipsum. Vivamus quis nisi eleifend, 
              sodales sapien a, ullamcorper nisi. Phasellus id 
              sapien sapien. Maecenas rutrum arcu ac enim dapibus, 
              in gravida diam egestas. Nulla facilisi. Etiam ipsum 
              nunc, accumsan ut orci non, venenatis pharetra nisi. 
              Donec sit amet pharetra odio. Aenean dapibus venenatis 
              massa vitae imperdiet. Curabitur vel eros quis urna 
              consectetur ultricies a at lorem. Aenean non ligula nibh.</p>
          </div>
        </div>
      </div>
    </main>
  </body>
  );
}

export default App;
