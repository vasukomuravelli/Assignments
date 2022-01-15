import React from 'react';

import { useSelector } from "react-redux"

import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    
    const { isAuth,token } = useSelector(state => ({isAuth : state.AuthState.isAuth,token : state.AuthState.token}));

    if (!isAuth) {
        
        return <Navigate to={"/login"} />
    }
    return (children);
}