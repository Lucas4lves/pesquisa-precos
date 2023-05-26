import { createContext, useContext, useState } from 'react';
import lojas from "../lojas.json";


export const AppContext = createContext();

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

const AppContextProvider = ({children}) =>{
    return (
        <AppContext.Provider value={ {lojas} }>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;