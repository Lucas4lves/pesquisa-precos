import { useStoresContext } from "../../Contexts/Stores";
import EmptyState from "../EmptyState";

const Selected = ({ type }) => {
  const { selecionadas } = useStoresContext();

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
            <div className="selected-line" key={index}>
              <span className="selected-span span-loja">{loja.codigo}</span>
              <span className="selected-span span-filial" >{generateStoreSlug(loja.nomeFilial)}</span>
              <span className="selected-span span-uf" >{loja.uf}</span>
              <button className="selected-remove" >X</button>
            </div>
          );
        }): <EmptyState />}
        </div>
      </div>
    );
  }

  return (
    <div className="selected-box">
    <div className="selected-top">
      <h3>Selecionados</h3>
    </div>
    <div className="selected-content">
      {selecionadas?.map((loja, index) => {
        return <p key={index}>{loja.codigo}</p>;
      })}
      </div>
    </div>
  );
};

export default Selected;
