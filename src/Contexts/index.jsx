import { createContext, useContext, useState } from "react";
export const AppContext = createContext();
import lojas from "../lojas.json";
import produtos from "../produto.json";

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [form, setForm] = useState({
    categoria: "RX",
    startDate: startDate,
    endDate: endDate,
    lojas: [],
    produtos: [],
    isFinished: false,
  });
  
  const handleInitialDateChange = (e) => {
    return setForm({...form, startDate: e.target.value});
  };

  const handleEndDateChange = (e) => {
    return setForm({...form, endDate: e.target.value});
  };
  const getStoreById = (id) => {
    return lojas.filter((loja) => loja.codigo == id)[0];
  };

  const selectStore = (e) => {
    if (!form.lojas.includes(getStoreById(e.target.parentNode.id))) {
      setForm([...form.lojas, getStoreById(e.target.parentNode.id)]);
      return;
    }
    setForm(
      form.lojas.filter((loja) => loja.codigo != e.target.parentNode.id)
    );
  };


  return (
    <AppContext.Provider
      value={{
        form, setForm,
        selectStore,
        handleInitialDateChange,
        handleEndDateChange
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
