import logo from './logo.svg';
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
                <li id="list4" style={{float: "right"}}><a href="http://localhost:3006/" style={{color: "#f3e3e2"}}>Profile</a></li>
                <li id="list5" style={{float: "right"}}><a href="http://localhost:3002/" style={{color: "#f3e3e2"}}>Cart</a></li>
            </ul>
        </nav>
      </header>
    </body>
  );
}

export default App;
