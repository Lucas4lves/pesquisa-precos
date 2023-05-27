import { useState } from "react";
import { useGlobalContext } from "../../Contexts";
import { useStoresContext } from '../../Contexts/Stores';

const TableLine = ({ item, index, type }) => {

  const [checked, setChecked] = useState(false);
  const { produto,  form, setForm } = useGlobalContext();
  const { lojas, selecionadas, setSelecionadas } = useStoresContext();

  const getStoreById = (id) => {
    return lojas.filter((loja) => loja.codigo == id)[0];
  };

  const getProductById = (id) => {
    return produto.filter(produto => produto.id == id)[0];
  }

  const selectStore = (e) => {
    if (!selecionadas.includes(getStoreById(e.target.parentNode.id))) {
      setSelecionadas([ ...selecionadas, getStoreById(e.target.parentNode.id)]);
      return;
    }

    setSelecionadas(
      selecionadas.filter(loja => loja.codigo != e.target.parentNode.id)
    );
  };

  const selectProduct = (e) => {
    if (!form[e.target.name].includes(getProductById(e.target.parentNode.id))) {
      setForm({ ...form, [e.target.name]: [...form[e.target.name], getProductById(e.target.parentNode.id)]});
      setChecked(!checked)
      return;
    }

    setForm({
      ...form,
      [e.target.name]: [
        ...form.produtos.filter((produto) => produto.id != e.target.parentNode.id),
      ],
    });
  };

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
          checked={form.produtos.includes(item) ? true : false}
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
