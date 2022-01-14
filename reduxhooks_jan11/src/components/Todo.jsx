import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate,Link } from "react-router-dom";
import { removeTodoLoading,removeTodoSuccess,updateTodoLoading,updateTodoSuccess } from "../redux/actions";

export const Todo = () => {
    const { loading, todos, error } = useSelector((state) => ({ loading: state.loading, todos: state.todos, error: state.error }));
    const [todo, setTodo] = React.useState(null);
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    React.useEffect(() => {
        setTodo(todos.filter((e) => {
            console.log(e.id===+id);
            return e.id === +(id)
        }));
    }, [todos,id]);
    console.log(todos);
    
    // const getTodo = () => {
        // fetch(`http://localhost:3001/todos/${id}`).then((response) => response.json()).then((response) => setTodo(response));
    // }
    // getTodo();
    const removeTodo = () => {
        navigate("/");
        dispatch(removeTodoLoading());
        dispatch(removeTodoSuccess(+id));
        // getTodo();

    }
    const updateTodo = () => {
        dispatch(updateTodoLoading());        
        dispatch(updateTodoSuccess(+id));
        // getTodo();
    }
    console.log("todo",todo);
    return loading ? <div>Loading...</div> : error ? <div>Something went wrong!</div> : (
        todo && (<div>
            <Link to="/"><button>Go TO HomePage</button></Link>
            <h1>{todo[0].title}</h1>
            <h3>{todo[0].status ? "Completed" : "Not Completed"}</h3>
            <button onClick={updateTodo}>Update</button>
            <button onClick={removeTodo}>Remove</button>
            <Link to={`/todos/${todo[0].id}/edit`}><button>Edit</button></Link>
        </div>)
    )
}