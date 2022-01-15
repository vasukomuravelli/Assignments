import './App.css';
import { Login } from "./Components/Login";
import { Todo } from "./Components/Todo";
import { Route, Routes } from "react-router-dom";
import {PrivateRoute } from "./Components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<PrivateRoute><Todo /></PrivateRoute>} />
      </Routes>       
    </div>
  );
}

export default App;
