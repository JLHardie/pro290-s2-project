import { useState } from "react"
import ShowTickets from "./ShowTickets";
import ShowIssue from "./ShowIssue";

function MainPage({item, setItem, setData, data, SwapCreateScreens, SwapEditScreens}) {
    

    return (
    <div>
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
      <div className="split left">
        <button id="create" onClick={SwapCreateScreens}>Create Ticket</button>
        <br />
          <ShowTickets setData={setData} data={data} setItem={setItem}/>
      </div>
        
      <div className="split right">
        <div className="centered">
          <ShowIssue item={item}/>

          <button id="edit" onClick={SwapEditScreens}>Edit Ticket</button>
        </div>
      </div>
    </main>
  </div>
  );
};

function Main() {
  const [isLoading, setLoading] = useState(false)

}

export default MainPage;