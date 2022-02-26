import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate,Link } from 'react-router-dom';
import { registerLoading, registerError, registerSuccess } from "../redux/registeration/actions"
import { Input,Button } from 'antd';


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
        console.log(form);
        fetch("https://reqres.in/api/register", {
            body: JSON.stringify(form),
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }).then((response) => {
            return response.json();
        }).then((res) => {
            dispatch(registerSuccess(res.token));
        }).catch((error) => {
            dispatch(registerError(error.message))
        })
    }
    if (token) {
        return <Navigate to="/login"/>
    }
    return (
        isLoading ? <div>...Loading</div> : 
            <div style={{ width: "50%", margin: "auto" }}>
            <h1>Register here</h1>
            <Input type="text" id="email" placeholder="Enter your Email" onChange={handleChange}/><br/><br/>
            <Input type="password" id="password" placeholder="Enter your Password" onChange={handleChange}/><br/><br/>
            <Button type="submit" onClick={handleClick}>Submit</Button><br/><br/>
            <Link to="/login"><p style={{fontSize:"16px"}}>Already a user ?</p></Link>                
        </div>
    )
}