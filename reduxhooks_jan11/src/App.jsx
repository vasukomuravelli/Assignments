import "./App.css";
import { Home } from "./components/Home";
import { Todo } from "./components/Todo";
import { Total } from "./components/Total";
import {Edit} from "./components/Edit";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos/:id" element={<Todo />} />
        <Route path="/total" element={<Total />} />
        <Route path="/todos/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
