import { useStoresContext } from '../../Contexts/Stores';
import { useProductsContext } from "../../Contexts/Products";

const TableLine = ({ item, index, type }) => {

  const { selecionadas, selectStore } = useStoresContext();
  const { selecionados, selectProduct} = useProductsContext();

  if (type == "lojas") {
    
    return (
      <div id={item.codigo} key={index} className="table-line">
        <span style={{ flex: `1`, paddingLeft: ".2em" }}>{item.codigo}</span>
        <span style={{ flex: `2`, paddingLeft: ".2em" }}>
          {item.nomeFilial}
        </span>
        <span style={{ flex: `1`, paddingLeft: ".2em" }}>{item.uf}</span>
        <input
          name="lojas"
          checked={selecionadas.includes(item) ? true : false}
          type="checkbox"
          onChange={(e) => {
            selectStore(e);
          }}
        />
      </div>
    );
  } if (type == "produtos") {
  
    return (
      <div id={item.id} key={index} className="table-line line-produto">
        <span style={{ flex: `.17`, paddingLeft: ".2em" }}>{item.id}</span>
        <span style={{ flex: `1`, paddingLeft: ".2em" }}>{item.nome}</span>
        <input
          name="produtos"
          checked={selecionados.includes(item) ? true : false}
          type="checkbox"
          onChange={(e) => {
            selectProduct(e);
          }}
        />
      </div>
    );
  }
};

export default TableLine;
