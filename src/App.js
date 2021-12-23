
import './App.css';

function App() {
  let mobileOS = ["Android","Blackberry","Iphone","Windows phone"];
  let Manufactures = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        {mobileOS.map((e)=><List models = {e}/>)}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        {Manufactures.map((e)=><List models = {e}/>)}
      </ul>
    </div>
  );
}

function List({models}){
  return (
    <li>{models}</li>
  );
}

export default App;
