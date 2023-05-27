import {
    useState,
    createContext,
    useContext
} from 'react';

import produtos from "../produto.json";

const ProductsContext = createContext();

export const useProductsContext = () =>{
    return useContext(ProductsContext);
}

const ProductsProvider = ({children}) =>{

    const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);
    const [selecionados, setSelecionados] = useState([]);

    return (
        <ProductsContext.Provider value={{
            produtos,
            produtosFiltrados,
            setProdutosFiltrados,
            selecionados,
            setSelecionados
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;