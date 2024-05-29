import React from 'react';
import MainPage from './MainPage';
import CreateTicket from './CreateTicket';
import EditTicket from './EditTicket';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [isCreate, setCreate] = useState(true)
  const [isEdit, setEdit] = useState(true)
  
  function SwapCreateScreens() {
    setCreate(!isCreate)
  }

  function SwapEditScreens() {
    setEdit(!isEdit)
  }

  return (
      <div className="App">
        {isCreate ? 
          (<MainPage SwapScreens={SwapCreateScreens}/>) :
          (<CreateTicket SwapScreens={SwapCreateScreens} />) 
        }

        {isEdit ? 
          (<MainPage SwapScreens={SwapEditScreens}/>) :
          (<EditTicket SwapScreens={SwapEditScreens} />) 
        }
      </div>
  );
};

export default App;
