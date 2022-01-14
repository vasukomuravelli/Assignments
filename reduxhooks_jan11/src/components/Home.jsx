import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {getTodoLoading,getTodoSuccess,getTodoError,addTodoError,addTodoSuccess,addTodoLoading } from "../redux/actions";

export const Home = () => {
    const [text, setText] = React.useState("");
    const { loading, todos, error } = useSelector((state) => ({ loading: state.loading, todos: state.todos, error: state.error }));
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getTodoLoading());
        getTodos();
    }, []);
    React.useEffect(() => { }, [todos]);
    const getTodos = async () => {
        try {
            const data = await fetch(`http://localhost:3001/todos`);
            const res = await data.json();
            dispatch(getTodoSuccess(res));
        } catch (e) {
            dispatch(getTodoError(e));
        }
    };

    const addTodos = () => {
        dispatch(addTodoLoading());
        fetch(`http://localhost:3001/todos`, {
            method: "POST",
            body: JSON.stringify({ status: false, title: text }),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json()).then((res) => {
            dispatch(addTodoSuccess(res));
        }).catch((e) => {
            dispatch(addTodoError(e));
        });
        getTodos();
    }

    return loading ? <div>Loading...</div> : error ? <div>Something went wrong!</div> : (
        <div>
            <h3>ADD TODOS</h3>
            <input type="text" placeholder="Enter your todos" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodos}>Add Todo</button>
            {todos.map((e) => {return (<Link to={`/todos/${e.id}`}><div>{e.title} {e.status ? "Completed" : "Not Completed"}</div></Link>)})}
        </div>
    )
}