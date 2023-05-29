import { createContext, useContext, useState } from "react";
import lojas from "../lojas.json";

export const StoresContext = createContext();

export const useStoresContext = () => {
  return useContext(StoresContext);
};

const StoresProvider = ({ children }) => {
  const [lojasFiltradas, setLojasFiltradas] = useState(lojas);
  const [selecionadas, setSelecionadas] = useState([]);

  const getStoreById = (id) => {
    return lojas.filter((loja) => loja.codigo == id)[0];
  };

  const selectStore = (e) => {
    if (!selecionadas.includes(getStoreById(e.target.parentNode.id))) {
      setSelecionadas([...selecionadas, getStoreById(e.target.parentNode.id)]);
      return;
    }
    setSelecionadas(
      selecionadas.filter((loja) => loja.codigo != e.target.parentNode.id)
    );
  };

  return (
    <StoresContext.Provider
      value={{
        lojas,
        lojasFiltradas,
        setLojasFiltradas,
        selectStore,
        selecionadas,
        setSelecionadas,
      }}
    >
      {children}
    </StoresContext.Provider>
  );
};

export default StoresProvider;
