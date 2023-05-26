import { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "../../Context";

const TableLine = ({ item, index, type }) => {
  const [checked, setChecked] = useState(false);

  const { form, setForm } = useGlobalContext();


  const getStoreById = (e) =>{
    return form.lojas.filter(loja => loja.codigo == e.target.parentNode.id)[0];
  }

  const select = (e) => {
    if (form[`${e.target.name}`].includes(Number(e.target.parentNode.id))) {
      setForm({
        ...form,
        [e.target.name]: [
          ...form[`${e.target.name}`].filter(
            loja => loja.codigo !== Number(e.target.parentNode.id)
          ),
        ],
      });
      return;
    }
    setForm({
      ...form,
      [e.target.name]: [
        ...form[`${e.target.name}`],
        Number(e.target.parentNode.id),
      ],
    });
  };

  if (type == "lojas") {
    useEffect(() => {
      if (form.lojas.includes(Number(item.codigo))) {
        setChecked(true);
        return;
      } else {
        return setChecked(false);
      }
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
            select(e);
            setChecked(!checked);
          }}
        />
      </div>
    );
  } else if (type == "produtos") {
    useEffect(() => {
      if (form.produtos.includes(item.id)) {
        setChecked(true);
        return;
      } else {
        return setChecked(false);
      }
    }, []);

    return (
      <div id={item.id} key={index} className="table-line line-produto">
        <span style={{ flex: `.17`, paddingLeft: ".2em" }}>{item.id}</span>
        <span style={{ flex: `1`, paddingLeft: ".2em" }}>{item.nome}</span>
        <input
          name="produtos"
          checked={checked}
          type="checkbox"
          onChange={(e) => {
            setChecked(!checked);
            select(e);
          }}
        />
      </div>
    );
  }
};

export default TableLine;
