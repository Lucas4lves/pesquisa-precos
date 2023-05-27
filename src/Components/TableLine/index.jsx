import { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../../Context";

const TableLine = ({ item, index, type }) => {

  const [checked, setChecked] = useState(false);

  const { lojas, produto,  form, setForm } = useGlobalContext();

  const getStoreById = (id) => {
    return lojas.filter((loja) => loja.codigo == id)[0];
  };

  const getProductById = (id) => {
    return produto.filter(produto => produto.id == id)[0];
  }

  const selectStore = (e) => {
    if (!form[e.target.name].includes(getStoreById(e.target.parentNode.id))) {
      setForm({ ...form, [e.target.name]: [...form[e.target.name], getStoreById(e.target.parentNode.id)]});
      setChecked(!checked)
      return;
    }

    setForm({
      ...form,
      [e.target.name]: [
        ...form.lojas.filter((loja) => loja.codigo != e.target.parentNode.id),
      ],
    });
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
    useEffect(() => {
      if (form.lojas.includes(getStoreById(item.codigo))) {
        setChecked(true);
        return;
      } 
      setChecked(false)
    });

    return (
      <div id={item.codigo} key={index} className="table-line">
        <span style={{ flex: `1`, paddingLeft: ".2em" }}>{item.codigo}</span>
        <span style={{ flex: `2`, paddingLeft: ".2em" }}>
          {item.nomeFilial}
        </span>
        <span style={{ flex: `1`, paddingLeft: ".2em" }}>{item.uf}</span>
        <input
          name="lojas"
          checked={checked}
          type="checkbox"
          onChange={(e) => {
            setChecked(!checked);
            selectStore(e);
          }}
        />
      </div>
    );
  } else if (type == "produtos") {
    useEffect(() => {
      if (form.produtos.includes(getProductById(item.id))) {
        setChecked(true);
        return;
      } else {
        setChecked(false);
        return;
      }
    });

    return (
      <div id={item.id} key={index} className="table-line line-produto">
        <span style={{ flex: `.17`, paddingLeft: ".2em" }}>{item.id}</span>
        <span style={{ flex: `1`, paddingLeft: ".2em" }}>{item.nome}</span>
        <input
          name="produtos"
          checked={checked}
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
