import React from 'react';


import '../styles/App.css';

import Main from './Main'
import Sidebar from "./Sidebar"

function App() {
  return (
  <div className="App"> 
    <div id="wrapper">
      <Sidebar/>
      <Main/>
    </div>
  </div>
  )
}

export default App;
