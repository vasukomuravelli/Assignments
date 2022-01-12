import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTodoLoading, getTodoSuccess, getTodoError,removeTodoLoading,removeTodoSuccess,removeTodoError } from "../redux/actions";

export const Todo = () => {
    const { loading, todos, error } = useSelector((state) => ({ loading: state.loading, todos: state.todos, error: state.error }));
    const {id} = useParams();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTodoLoading());
        getTodo();
    }, [id])
    
    const getTodo = () => {
        fetch(`http://localhost:3001/todos/${id}`).then((d) => d.json()).then((res) => dispatch(getTodoSuccess(res))).catch((e) => getTodoError(e));
    }
    const removeTodo = () => {
        dispatch(removeTodoLoading());
        dispatch(removeTodoSuccess(id));
        // fetch(`http://localhost:3001/todos/${id}`, {
        //     method: "DELETE",
        //     headers: { "Content-Type": "application/json" }
        // }).then(res => res.json()).then(res => console.log(res)).catch((e)=>removeTodoError(e));
    }
    return loading ? <div>Loading...</div> : error ? <div>Something went wrong!</div> : (
        <div>
            <h1>{todos.title}</h1>
            <h3>{todos.status}</h3>
            <button>Update</button>
            <button onClick={removeTodo}>Remove</button>
        </div>
    )
}