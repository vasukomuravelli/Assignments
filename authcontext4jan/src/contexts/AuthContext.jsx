import React from 'react';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState("Login");
    const ToggleAuth = () => {
        setIsAuth(isAuth==="Login" ? "Logout" : "Login");
    }
    return (
        <AuthContext.Provider value = {{isAuth, ToggleAuth,setIsAuth}}>{children}</AuthContext.Provider>
    )
}
