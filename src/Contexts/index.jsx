import { createContext, useContext, useState } from "react";

import produto from "../produto.json";

export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const lineTypes = ["lojas", "produtos"];
  const [form, setForm] = useState({
    categoria: "RX",
    startDate: "",
    endDate: "",
    produtos: [],
    isFinished: false,
  });
  

  return (
    <AppContext.Provider
      value={{
        produto,
        lineTypes,
        form, setForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
