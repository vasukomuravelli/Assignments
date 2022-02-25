import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import {registerLoading,registerError,registerSuccess} from "../redux/registeration/actions"

export const Register = () => {
    const [form, setForm] = React.useState({});
    const { isLoading, token, isError, } = useSelector((state) => ({ isLoading: state.registerState.isLoading, token: state.registerState.token, isError: state.registerState.isError }));
    
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const {id, value} = e.target;
        setForm({...form,[id]:value});
    }
    const handleClick = () => {
        dispatch(registerLoading());
        fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
            body: form,
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            console.log(response);
            dispatch(registerSuccess(response));
        }).catch((error) => {
            dispatch(registerError(error.message))
        })
    }
    if (token) {
        return <Navigate to="/login"/>
    }
    return (
        isLoading ? <div>...Loading</div> : 
        <div>
            <input type="text" id="Name" placeholder="Enter your Name" onChange={handleChange}/><br/><br/>
            <input type="text" id="Email" placeholder="Enter your Email" onChange={handleChange}/><br/><br/>
            <input type="password" id="Password" placeholder="Enter your Password" onChange={handleChange}/><br/><br/>
            <input type="text" id="Username" placeholder="Enter your Username" onChange={handleChange}/><br/><br/>
            <input type="text" id="Mobile" placeholder="Enter your Mobile" onChange={handleChange}/><br/><br/>
            <input type="description" id="Description" placeholder="Enter your Description" onChange={handleChange} /><br/><br/>
            <button type="submit" onClick={handleClick}>submit</button>
        </div>
    )
}