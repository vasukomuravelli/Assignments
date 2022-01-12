import "./App.css";
import { Home } from "./components/Home";
import { Todo } from "./components/Todo";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos/:id" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
