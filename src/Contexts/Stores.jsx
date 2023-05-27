import {
    createContext, useContext, useState
} from 'react';
import lojas from "../lojas.json";

export const StoresContext = createContext();

export const useStoresContext = () =>{
    return useContext(StoresContext);
}

const StoresProvider = ({children}) => {
    const [lojasFiltradas, setLojasFiltradas] = useState(lojas);
    const [selecionadas, setSelecionadas] = useState([]);
    return (
        <StoresContext.Provider value={{
            lojas,
            lojasFiltradas,
            setLojasFiltradas,selecionadas,
            setSelecionadas
        }}>
            {children}
        </StoresContext.Provider>
    )
}

export default StoresProvider;