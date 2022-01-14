import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Total = () => {
    const [total, setTotal] = React.useState(0);
    const[pending,setPending] = React.useState(0);
    const { loading, todos, error } = useSelector((state) => ({ loading: state.loading, todos: state.todos, error: state.error }));
    React.useEffect(() => {
        setTotal(todos.length);
        setPending(todos.filter(todo => todo.status === false).length);
    }, []);


    return loading ? <div>Loading...</div> : error ? <div>Something went wrong!</div> : (
        <div>
            <Link to="/"><button>Go TO HomePage</button></Link>
            <h3>Total Items : {total}</h3>
            <h3>Incompleted items : {pending}</h3>
            {todos.filter(todo => todo.status === false).map(todo => {
                return <div>
                    {todo.title} - {todo.status ? "completed" : "Not completed"}
                </div>
            })}
        </div>
    )
}