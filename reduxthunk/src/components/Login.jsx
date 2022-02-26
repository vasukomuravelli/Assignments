import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate,Link } from "react-router-dom";
import {loginError,loginSuccess,loginLoading } from "../redux/Login/actions";
import { Input,Button } from 'antd';


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
            body: JSON.stringify(details),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response.token);
            dispatch(loginSuccess(response));
        }).catch((error) => dispatch(loginError(error)));
    }
    if (token) {
        return <Navigate to="/"></Navigate>
    }
    return ( isLoading ? <div>...Loading</div> : isError ? <div>Something is wrong</div> :
        <div style={{ width: "50%", margin: "auto" }}>
            <h1>Login here</h1>
            <Input type="text" id="email" placeholder="Enter your Email" onChange={handleChange}/><br/><br/>
            <Input type="password" id = "password" placeholder="Enter your Password" onChange={handleChange} /><br/><br/>
            <Button type="submit" onClick={handleClick}>Submit</Button><br/><br/>
            <Link to="/register"><p style={{fontSize:"16px"}}>Not a user ?</p></Link>
        </div>
    )
}