import React from 'react';
import { AppContext } from "../context/AppContextApi";
import { addTodo, removeTodo, updateTodo, editTodo } from "../redux/actions";
import { nanoid } from "nanoid";

export const Todos = () => {
    const [todos, setTodos] = React.useState([]);
    const [text, setText] = React.useState("");
    const [change, setChange] = React.useState("");
    const [display, setDisplay] = React.useState("none");
    const {dispatch,getState} = React.useContext(AppContext);
    const handleToggle = (id) => { 
        dispatch(updateTodo(id));
        setTodos(getState());

    };
    const handleRemove = (id) => {
        dispatch(removeTodo(id));
        setTodos(getState());

     };
    const handleSubmit = () => { 
        dispatch(addTodo({title : text,status : false,id : nanoid(5)}));
        setTodos(getState());
    };
    const handleEdit = (id) => { 
        dispatch(editTodo({title : change,id : id}));
        setDisplay("none");
        setTodos(getState());
    };
    return (
        <div>
            <input type="text" placeholder="Enter your todos" onChange={(e)=>setText(e.target.value)} />
            <input type="submit" onClick={handleSubmit} />
            {todos.map((e,i) => (<div key={e.id}>
                {i + 1}. {e.title} - {e.status ? "completed" : "Not completed"}
                <button onClick={() => handleToggle(e.id)}>Toggle</button>
                <button onClick={() => handleRemove(e.id)}>Remove</button>
                <button onClick={() => {
                    return setDisplay(display==="none" ? "block" : "none");
                }}>Edit</button>
                <div style={{ display: display }} >
                    <input type="text" placeholder="Enter your new title" onChange={(e) => setChange(e.target.value)}/>
                    <button onClick={() => handleEdit(e.id)}>Change</button>
                </div>
            </div>))}
        </div>
    )
}