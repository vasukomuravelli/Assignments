import './App.css';
import React from "react";
import Changecounter from './Counterchange';

function App() {  

  return (
    <div className="App">    
    <Changecounter props = {React.useState}/>
    </div>
  );
}

export default App;
