import { Accordion } from "@chakra-ui/react";
import Section from "./Components/Section";
import AppContextProvider from "./Contexts/index.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./app.css";

function App() {
  const sectionHints = {
    period: "Defina a data de início e a data de término da sua pesquisa",
    stores: "Selecione quais unidades irão realizar a pesquisa",
    products: "Selecione os produtos a serem pesquisados",
    summary: "Confira antes de enviar",
  };

  return (
    <>
      <header className="header">
        <div className="buffer"></div>
        <div className="header-heading"></div>
      </header>

      <div className="title">
        <h1>Cadastro de Pesquisa</h1>
      </div>

      <div className="main-wrapper">
        <ChakraProvider>
          <Accordion allowToggle className="accordion-body">
            <AppContextProvider>
              <Section title={"Período"} hint={sectionHints["period"]} />
              <Section title={"Lojas"} hint={sectionHints["stores"]} />
              <Section title={"Produtos"} hint={sectionHints["products"]} />
              <Section title={"Resumo"} hint={sectionHints["summary"]} />
            </AppContextProvider>
          </Accordion>
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
