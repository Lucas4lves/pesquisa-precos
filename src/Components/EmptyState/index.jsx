import "./empty.css";

const EmptyState = ({type}) =>{

    const messages = {
        stores: {
            headers: ["Ainda não há unidades selecionadas"],
            paras: ["Marque as caixinhas ao lado para iniciar!"],
        },
        products: {
            headers: ["Ainda não há produtos selecionados"],
            paras: ["Marque as caixinhas ao lado para iniciar!"]
        }
    }

    return (
        <div className="empty-body">
            {
                type === "stores" ? <div className="empty-hero empty-stores">
                </div> : <div className="empty-hero empty-products">
            </div>
            }
            <h3 className="empty-header">
                {messages[type].headers[0]}
            </h3>
            <p className="empty-para">{messages[type].paras[0]}</p>
        </div>
    )
}

export default EmptyState;