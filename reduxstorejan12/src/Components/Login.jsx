import React from 'react';
import { loginFailure, loginSuccess } from "../Redux/Auth/Actions";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
export const Login = () => {
    const [details, setDetails] = React.useState({});
    const {isAuth,token} = useSelector(state => ({isAuth : state.AuthState.isAuth,token : state.AuthState.token}));
    const dispatch = useDispatch();
    const handleChange = ({target : {name,value}}) => {
        setDetails({...details,[name]: value});
    }
    const handleSubmit = () => {
        try {
            fetch("https://reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify(details),
                headers: { "Content-Type": "application/json" },
            }).then((res) => res.json()).then((res) => {
                dispatch(loginSuccess(res.token));
            });            
        } catch (e) {
            dispatch(loginFailure(e));
        }
    }
    return isAuth ? <Navigate to={"/"} /> : (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Enter your email" onChange={(e) =>handleChange(e)} name="email" />
            <input type="password" placeholder="Enter your password" onChange={(e) => handleChange(e)} name="password" />
            <button onClick={() =>handleSubmit()}>Submit</button>
        </div>
    )
}