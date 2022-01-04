import React from 'react';
import { AuthContext } from "../contexts/AuthContext";
import { Loginform } from "./LoginForm";
import { Button } from 'antd';
export const Navbar = () => {
    const [loggedin, setLoggedin] = React.useState("false");
    const { isAuth,setIsAuth } = React.useContext(AuthContext);
    const toggleform = () => {
        if (isAuth === "Logout") {
            setIsAuth("Login");
        }
        setLoggedin(loggedin === "false" ? "true" : "false");   
    }
    return (
        <>
            <Button type="primary" style={{marginLeft : "92%", marginTop : "25px"}} onClick={toggleform}>{isAuth}</Button>
            {loggedin==="true" ? <Loginform/> : null}
        </>
    )
}