import {
    useState,
    createContext,
    useContext
} from 'react';

import produtos from "../../produto.json";

const ProductsContext = createContext();

export const useProductsContext = () =>{
    return useContext(ProductsContext);
}

const ProductsProvider = ({children}) =>{

    const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);
    const [selecionados, setSelecionados] = useState([]);

    const getProductById = (id) => {
        return produtos.filter(produto => produto.id == id)[0];
      }
    
    
      const selectProduct = (e) => {
        if (!selecionados.includes(getProductById(e.target.parentNode.id))) {
          setSelecionados([...selecionados, getProductById(e.target.parentNode.id)]);
          return;
        }
    
        setSelecionados(
          selecionados.filter(product => product.id != e.target.parentNode.id)
        );
      };


    return (
        <ProductsContext.Provider value={{
            produtos,
            produtosFiltrados,
            setProdutosFiltrados,
            selecionados,
            setSelecionados,
            selectProduct
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;