const SelectOption = ({categorias}) =>{
    return (
        <div className="select-wrapper">
            <label htmlFor="categoria"> Categoria</label>
            <select className="select-option" id="categoria">
                {categorias?.map((categoria, index) => {
                    return <option key={index} >{categoria}</option>
                })}
            </select>
        </div>
    )
}

export default SelectOption;