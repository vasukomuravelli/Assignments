import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {loginError,loginSuccess,loginLoading } from "../redux/Login/actions";


export const Login = () => {
    const [details, setDetails] = React.useState({});
    const { isLoading, token, isError } = useSelector((state) => ({ isLoading: state.loginState.isLoading, token: state.loginState.token, error: state.loginState.error }));
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setDetails({ ...details, [e.target.id]: e.target.value });
    }
    const handleClick = () => {
        dispatch(loginLoading());
        console.log(details);
        fetch("https://reqres.in/api/login", {
            body: details,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log(response.token);
            dispatch(loginSuccess(response));
        }).catch((error) => dispatch(loginError(error)));
    }
    return ( isLoading ? <div>...Loading</div> : 
        <div>
            <input type="text" id="email" placeholder="Enter your Email" onChange={handleChange}/><br/><br/>
            <input type="password" id = "password" placeholder="Enter your Password" onChange={handleChange} /><br/><br/>
            <button type="submit" onClick={handleClick}>Submit</button> 
        </div>
    )
}