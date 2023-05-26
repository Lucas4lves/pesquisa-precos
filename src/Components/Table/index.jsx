import { useGlobalContext } from "../../Context";
import SearchInput from "../SearchInput";
import SelectOption from "../SelectOption";
import TableHeader from "../TableHeader";
import TableLine from "../TableLine";

const Table = ({ data, type }) => {

  const {lojasFiltradas, produtosFiltrados } = useGlobalContext();

  if (type === "lojas") {
    return (
      <>
        <div className="top-box">
          <SearchInput placeholder={"Pesquisar por Lojas..."} name={'lojas'} />
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
        <div className="top-box" style={{gap: '.3em', alignItems: 'center'}}>
          <SelectOption categorias={["RX Marca", "RX Genérico", "Marca Própria", "OTC"]}/>
          <SearchInput  placeholder={"Pesquisar por Produtos..."} name={'produtos'} />
        </div>
        <div className="inner-box">
          <TableHeader
            columns={["Código", "Descrição", ""]}
            flexes={[.5, 2, 1]}
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

  return <>Resumo</>;
};

export default Table;