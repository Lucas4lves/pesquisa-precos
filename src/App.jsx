import { Accordion } from "@chakra-ui/react";
import Section from "./Components/Section";
import AppContextProvider from "./Contexts/index.jsx";
import { ChakraProvider } from "@chakra-ui/react";

import "./app.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Pesquisa de Preços</h1>
      </header>
      <div className="main-wrapper">
        <ChakraProvider>
          <Accordion allowToggle defaultIndex={[0]} className="accordion-body">
            <AppContextProvider>
              <Section title={"Período"} />
              <Section title={"Lojas"} />
              <Section title={"Produtos"} />
              <Section title={"Resumo"} />
            </AppContextProvider>
          </Accordion>
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
