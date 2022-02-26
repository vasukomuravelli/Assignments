import { Register } from "./components/Register";
import { Login } from "./components/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
