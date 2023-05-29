import { useStoresContext } from "../../Contexts/Stores";
import { useProductsContext } from "../../Contexts/Products";
import { useState } from "react"
import EmptyState from "../EmptyState";

const Selected = ({ type }) => {
  const { selecionadas, selectStore } = useStoresContext();
  const { produtosFiltrados, selecionados, setSelecionados, selectProduct } = useProductsContext();

    const generateStoreSlug = (name) =>{
        let [code, slug, uf ] = name.split('-');

        return `${code} ${slug}`;
    }

  if (type === "lojas") {
    return (
      <div className="selected-box">
        <div className="selected-top">
          <h3>Selecionadas</h3>
        </div>
        <div className="selected-content">
        {selecionadas.length > 0? selecionadas?.map((loja, index) => {
          return (
            <div id={loja.codigo} className="selected-line" key={index}>
              <span className="selected-span span-loja">{loja.codigo}</span>
              <span className="selected-span span-filial" >{generateStoreSlug(loja.nomeFilial)}</span>
              <span className="selected-span span-uf" >{loja.uf}</span>
              <button onClick={(e) => selectStore(e)} className="selected-remove" >X</button>
            </div>
          );
        }): <EmptyState type={"stores"} />}
        </div>
      </div>
    );
  }

  const [markAllProducts, setMarkAllProducts] = useState(false);

  return (
    <div className="selected-box">
    <div className="selected-top">
      <h3>Selecionados</h3>
      <button  style={markAllProducts ? {
            backgroundColor: "#FF0000"
          }: {backgroundColor: "#1DA63D"}} onClick={()=>{
            setMarkAllProducts(!markAllProducts)
            if(markAllProducts)
            {
              return setSelecionados([])
            }

            setSelecionados(produtosFiltrados);

          }} className="check">{
            markAllProducts? "Desmarcar Todas" : "Marcar Todas"
          }</button>
    </div>
    <div className="selected-content">
      {selecionados.length > 0 ? selecionados?.map((product, index) => {
        return (
          <div id={product.id}   className="selected-line" key={index}>
            <span className="selected-span span-loja">{product.id}</span>
            <span className="selected-span span-filial" >{product.nome}</span>  
            <button onClick={(e) => selectProduct(e)} className="selected-remove" >X</button>
          </div>
        );
      }): <EmptyState type={"products"} />}
      </div>
    </div>
  );
};

export default Selected;
