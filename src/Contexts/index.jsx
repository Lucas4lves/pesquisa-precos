import { createContext, useContext, useState } from "react";
export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
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
        form, setForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
