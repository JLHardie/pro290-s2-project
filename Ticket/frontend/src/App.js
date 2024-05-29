import React, { useState } from 'react'

import MainPage from './components/MainPage';
import CreateTicket from './components/CreateTicket';
import EditTicket from './components/EditTicket';
import './App.css';

function App() {
  const [isCreate, setCreate] = useState(false)
  const [isEdit, setEdit] = useState(false)
  
  function SwapCreateScreens() {
    setCreate(!isCreate)
  }

  function SwapEditScreens() {
    setEdit(!isEdit)
  }

  return (
      <div className="App">
        {isCreate ? 
          (<CreateTicket SwapScreens={SwapCreateScreens} />) :
          (<MainPage SwapCreateScreens={SwapCreateScreens} SwapEditScreens={SwapEditScreens}/>)
        }

        {isEdit ? 
          (<EditTicket SwapScreens={SwapEditScreens} />) :
          (<MainPage SwapCreateScreens={SwapCreateScreens} SwapEditScreens={SwapEditScreens}/>) 
        }
      </div>
  );
};

export default App;
