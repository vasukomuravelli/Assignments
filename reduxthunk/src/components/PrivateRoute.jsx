import React from 'react';
import {useSelector} from "react-redux";
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { token } = useSelector((state) => ({ token: state.loginState.token }));

    if (token.length === 0) {
        return <Navigate to="/login" />;
    }
    return children;
}