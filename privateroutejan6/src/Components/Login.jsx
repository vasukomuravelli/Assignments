import React from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";

export const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = React.useState(null);
    const {handleToken } = React.useContext(AuthContext);
    const handleChange = ({target : {name, value}}) => {
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
        }).then((res) => res.json()).then((res) => {
            console.log(res);
            handleToken(res.token);
            navigate(-1);
        });
    }
    return (
        <form onSubmit={(e)=>{handleSubmit(e)}} style={{margin : "25px"}}>
            <input type="text" placeholder="Enter your email address" name="email" onChange={handleChange}/><br/><br/>
            <input type="password" placeholder="Enter your password" name="password" onChange={handleChange} /><br/><br/>
            <input type = "submit"/>
        </form>
    )
}