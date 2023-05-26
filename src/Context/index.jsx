import { createContext, useContext, useState } from "react";
import lojas from "../../lojas.json";
import produto from "../../produto.json";

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const lineTypes = ["lojas", "produtos"];
  const [lojasFiltradas, setLojasFiltradas] = useState(lojas);
  const [produtosFiltrados, setProdutosFiltrados] = useState(produto);
  const [form, setForm] = useState({
    categoria: "",
    startDate: "",
    endDate: "",
    lojas: [],
    produtos: [],
    isFinished: false,
  });

  return (
    <AppContext.Provider
      value={{
        lojas,
        produto,
        lineTypes,
        lojasFiltradas,
        setLojasFiltradas,
        produtosFiltrados,
        setProdutosFiltrados,
        form, setForm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
