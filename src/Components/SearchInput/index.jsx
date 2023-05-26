import "./search.css";
import { useState } from "react";
import { useGlobalContext } from "../../Context/";

const SearchInput = ({ placeholder, name }) => {
  const { lojas, setLojasFiltradas, produto, setProdutosFiltrados } = useGlobalContext();
  const [query, setQuery] = useState("");

  const filtrar = (query) => {
    if(name === 'lojas')
    {
        setLojasFiltradas([
            ...lojas.filter(
              (loja) => loja.codigo.toString() === query
            ),
          ]);
          if (query.length <= 0) {
            setLojasFiltradas(lojas);
          }
          setQuery(query);
          return;
    }

    setProdutosFiltrados([
        ...produto.filter(produto => produto.nome.toUpperCase().includes(query.toUpperCase()))
    ]);

    if(query.length <= 0){
        setProdutosFiltrados(produto);
    }
    setQuery(query);
    return;
  }

  return (
    <div className="search-wrapper">
      <input
        name={name}
        placeholder={placeholder}
        type="text"
        value={query}
        onChange={(e) => {
            filtrar(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
