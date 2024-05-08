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
        <h1>Inventory</h1>
        <table id="itemTable">
          {/* <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr> */}
      </table>
      </main>
    </body>
  );
}

export default App;
