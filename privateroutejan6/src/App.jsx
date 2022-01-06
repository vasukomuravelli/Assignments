import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/HomePage";
import { Dashboard } from "./Components/Dashboard";
import { Settings } from "./Components/Settings";
import { Login } from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import {PrivateRoute} from "./Components/Privateroute"


function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/dashboard"} element={<PrivateRoute ><Dashboard /></PrivateRoute>}/>
      <Route path={"/settings"} element={<PrivateRoute ><Settings /></PrivateRoute>}/>
    </Routes>
  </div>;
}

export default App;
