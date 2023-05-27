import { useGlobalContext } from "../../Contexts"
import { useProductsContext } from "../../Contexts/Products"

const SelectOption = ({categorias}) =>{

    const {form, setForm} = useGlobalContext();
    const { produtos, setProdutosFiltrados} = useProductsContext();

    const setCategory = (e) =>{
        setForm({
            ...form,
            categoria: e.target.value
        })
    }

    const filterByCategory = (e) =>{
        setProdutosFiltrados(
            produtos.filter(produto => produto.categoria === e.target.value)
        )
    }

    return (
        <div className="select-wrapper">
            <label htmlFor="categoria"> Categoria</label>
            <div className="teste">
            <select onChange={(e) => {
                setCategory(e)
                filterByCategory(e)
            }} className="select-option" id="categoria">
                {categorias?.map((categoria, index) => {
                    return <option value={categoria} key={index} >{categoria}</option>
                })}
            </select>
            </div>
        </div>
    )
}

export default SelectOption;