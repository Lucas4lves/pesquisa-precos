import SearchInput from "../SearchInput";
import SelectOption from "../SelectOption";
import TableHeader from "../TableHeader";
import TableLine from "../TableLine";
import { useStoresContext } from "../../Contexts/Stores.jsx";
import { useProductsContext } from "../../Contexts/Products.jsx";

const Table = ({ type }) => {
  const { lojasFiltradas } = useStoresContext();
  const { produtosFiltrados } = useProductsContext();

  if (type === "lojas") {
    return (
      <>
        <div className="top-box">
          <SearchInput
            placeholder={"Digite o código da loja..."}
            name={"lojas"}
          />
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
      <label htmlFor="startDate">Data de início: </label>
      <input id="startDate" type="datetime-local" />

      <label htmlFor="endDate">Data de término: </label>
      <input id="endDate" type="datetime-local" />
    </>
  );
};

export default Table;
