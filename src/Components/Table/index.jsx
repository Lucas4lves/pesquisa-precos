import SearchInput from "../SearchInput";
import SelectOption from "../SelectOption";
import TableHeader from "../TableHeader";
import TableLine from "../TableLine";
import { useStoresContext } from "../../Contexts/Stores.jsx";
import { useProductsContext } from "../../Contexts/Products.jsx";
import DateInput from "../DateInput";
import { useState } from "react";

const Table = ({ type }) => {
  const { lojas, setSelecionadas, lojasFiltradas } = useStoresContext();
  const [markAllStores, setMarkAllStores] = useState(false);
  if (type === "lojas") {
    return (
      <>
        <div className="top-box">
          <SearchInput
            placeholder={"Digite o código da loja..."}
            name={"lojas"}
          />
          <button  style={markAllStores ? {
            backgroundColor: "#FF0000"
          }: {backgroundColor: "#1DA63D"}} onClick={()=>{
            setMarkAllStores(!markAllStores)
            if(markAllStores)
            {
              return setSelecionadas([])
            }

            setSelecionadas(lojas);

          }} className="check">{
            markAllStores? "Desmarcar Todas" : "Marcar Todas"
          }</button>
        </div>
        <div className="inner-box">
          <TableHeader
            columns={["Código", "Nome", "UF", ""]}
            flexes={[1, 2, 1, 0.1]}
          />
          <div className="table-content">
            {lojasFiltradas?.map((item, index) => {
              return (
                <TableLine key={index} item={item} index={index} type={type} />
              );
            })}
          </div>
        </div>
      </>
    );
  } else if (type === "produtos") {
    const { produtosFiltrados } = useProductsContext();
    return (
      <>
        <div className="top-box" style={{ gap: ".3em", alignItems: "center" }}>
          <SelectOption
            categorias={["RX Marca", "RX Genérico", "Marca Própria", "OTC"]}
          />
          <SearchInput
            placeholder={"Pesquisar por Produtos..."}
            name={"produtos"}
          />
        </div>
        <div className="inner-box">
          <TableHeader
            columns={["Código", "Descrição", ""]}
            flexes={[0.5, 2, 1]}
          />
          <div className="table-content">
            {produtosFiltrados?.map((item, index) => {
              return (
                <TableLine key={index} item={item} index={index} type={type} />
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <DateInput name={"startDate"} text={"Data de Início: "} />
      <DateInput name={"endDate"} text={"Data de Término: "} />
       </>
  );
};

export default Table;
