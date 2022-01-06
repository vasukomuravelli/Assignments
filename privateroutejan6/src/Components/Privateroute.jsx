import React from 'react';
import { AuthContext } from "../Contexts/Authcontext";
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({children}) => {
    const { token } = React.useContext(AuthContext);
    if (!token) {
        return <Navigate to='/login'></Navigate>;
    }
    return (        
        children
    )
}