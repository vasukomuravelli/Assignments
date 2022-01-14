import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { editTodo,getTodoSuccess } from "../redux/actions";
import { useParams,useNavigate } from "react-router-dom";

export const Edit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [text, setText] = React.useState("");
    const [todo, setTodo] = React.useState({});
    const { loading, todos, error } = useSelector((state) => ({ loading: state.loading, todos: state.todos, error: state.error }));
    let { id } = useParams();
    id = Number(id);
    React.useEffect(() => {
        setTodo(todos.filter(todo => todo.id === id)[0]);
    }, [id]);
    return (
        <div>
            <div>{todo.title} - {todo.status ? "Completed" : "Not Completed"}</div>
            <input type="text" placeholder="Enter your new title" onChange={(e) => setText(e.target.value)} />
            <button onClick={() =>dispatch(editTodo({id : Number(id),text}),navigate(-1))}>Change</button>
        </div>
    )
}