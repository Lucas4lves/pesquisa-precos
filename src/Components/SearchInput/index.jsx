import "./search.css";
import { useState } from "react";
import { useStoresContext } from '../../Contexts/Stores.jsx';
import { useProductsContext } from '../../Contexts/Products.jsx';


const SearchInput = ({ placeholder, name }) => {
  const [query, setQuery] = useState("");
  const { lojas, lojasFiltradas, setLojasFiltradas } = useStoresContext();
  const { produtos, produtosFilrados, setProdutosFiltrados} = useProductsContext();
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
        ...produtos.filter(produto => produto.nome.toUpperCase().includes(query.toUpperCase()))
    ]);

    if(query.length <= 0){
        setProdutosFiltrados(produtos);
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
