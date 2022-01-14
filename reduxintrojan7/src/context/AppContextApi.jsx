import React from 'react';
import {store} from "../redux/store";

export const AppContext = React.createContext();


export const AppContextProvider = ({ children }) => {
    const {dispatch,getState} = store;
    return <AppContext.Provider value = {{dispatch,getState}}>{children}</AppContext.Provider>
}
