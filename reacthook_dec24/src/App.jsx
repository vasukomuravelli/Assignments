import './App.css';
import React from "react";
import Changecounter from './Counterchange';

function App() {  

  const [counter,setCounter] = React.useState(0);


  return (
    <div className="App">    
    <Changecounter counter = {counter} setCounter = {setCounter}/>
    </div>
  );
}

export default App;
