import logo from './logo.svg';
import './App.css';

import CartLink from './components/CartLink';
import LoginLink from './components/LoginLink';

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
                <LoginLink />
                <CartLink />
            </ul>
        </nav>
      </header>
      <main>
        <div class="split left">
          <h1>Home</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend viverra varius. Integer efficitur neque id libero lacinia 
          fermentum. Nullam pulvinar suscipit neque sit amet eleifend. Donec sit amet pellentesque odio, nec lacinia arcu. Etiam dapibus 
          accumsan dui, eget varius metus sodales quis. Curabitur lobortis sit amet metus sed sodales. Donec lacinia, nisi nec aliquam commodo, 
          massa quam facilisis tellus, a interdum risus nunc at urna. Mauris rutrum magna in volutpat mollis.

          Aliquam vehicula sed urna at rutrum. Vestibulum in risus congue leo congue placerat nec sit amet leo. Ut id lorem id est maximus tempor. 
          Quisque facilisis libero erat. Sed porta nisl eget interdum vehicula. Nullam egestas metus eu orci tristique ornare. Phasellus augue libero, 
          faucibus vel blandit quis, sagittis ut enim. Quisque neque augue, varius a leo sit amet, gravida fermentum tortor. Nunc tristique leo sed bibendum tempus.
          </p>
        </div>
        
      </main>
    </body>
  );
}

export default App;
