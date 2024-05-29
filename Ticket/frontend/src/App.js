import React, { useState } from 'react'

import MainPage from './components/MainPage';
import CreateTicket from './components/CreateTicket';
import EditTicket from './components/EditTicket';
import './App.css';

function App() {
  const [isCreate, setCreate] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const [data, setData] = useState([])
  const [item, setItem] = useState()

  function SwapCreateScreens() {
    setCreate(!isCreate)
  }

  function SwapEditScreens() {
    setEdit(!isEdit)
  }

  return (
      <div className="App">
        (<MainPage setItem={setItem} item={item} setData={setData} data={data} SwapCreateScreens={SwapCreateScreens} SwapEditScreens={SwapEditScreens}/>)
        {isCreate ? 
          (<CreateTicket setItem={setItem} setData={setData} SwapScreens={SwapCreateScreens} />) :
          <></>
        }

        {isEdit ? 
          (<EditTicket SwapScreens={SwapEditScreens} />) :
          <></>
        }
      </div>
  );
};

export default App;
