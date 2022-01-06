import './App.css';
import {Routes,Route} from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import {Productdetails } from "./components/Productdetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/products/:id"} element={<Productdetails />} />
        <Route path={"*"} element={<h1>404 Page Not Found</h1>} />
      </Routes>      
    </div>
  );
}

export default App;
