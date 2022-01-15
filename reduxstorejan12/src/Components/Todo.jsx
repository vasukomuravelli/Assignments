import React from 'react';

import { addTodoLoading, addTodoSuccess, addTodoError, removeTodoLoading, removeTodoSuccess, removeTodoError, updateTodoLoading, updateTodoSuccess, updateTodoError,getTodoLoading,getTodoSuccess,getTodoError } from "../Redux/Todos/Actions";

import { useSelector, useDispatch } from "react-redux";

import { nanoid } from "nanoid";

export const Todo = () => {
    
    const [text, setText] = React.useState("");
    
    const dispatch = useDispatch();

    const { loading, Todos, error } = useSelector((state) => ({ loading: state.TodoState.loading, Todos: state.TodoState.Todos, error: state.TodoState.error }));

    React.useEffect(() => {
        dispatch(getTodoLoading());
        getData();
    }, []);

    function getData() {
        let data = JSON.parse(localStorage.getItem('Todos'));
        dispatch(getTodoSuccess(data));
    }

    const update = (id) => {
        dispatch(updateTodoLoading());
        dispatch(updateTodoSuccess(id));
    }

    const remove = (id) => {
        dispatch(removeTodoLoading());
        dispatch(removeTodoSuccess(id));
    }

    const add = () => {
        dispatch(addTodoLoading());
        dispatch(addTodoSuccess({id : nanoid(5),title : text,status : false}));
    }
    return loading ? <div>Loading...</div> : error ? <div>Something went wrong!</div> : (
        <div>
            <h1>ADD TODOS</h1>
            <input type="text" placeholder="Enter your Todos" onChange={(e) => setText(e.target.value)} />
            <button onClick={() => add()}>Submit</button>
            {Todos ? Todos.map((todo,i) => (
                <div key={todo.id}>
                    <h3>{i + 1} - {todo.title} - {todo.status ? "completed" : "Not completed"}
                        <button onClick={() =>(update(todo.id))}>Toggle</button>
                        <button onClick={() =>(remove(todo.id))}>Remove</button>
                    </h3>
                </div>
            )) : null}
        </div>
    )
}
