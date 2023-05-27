import "./empty.css";

const EmptyState = () =>{

    const messages = {
        stores: {
            headers: ["Ainda não há unidades selecionadas"],
            paras: ["Marque as caixinhas ao lado para iniciar!"]
        },
        products: {
            headers: ["Ainda não há produtos selecionadas"],
            paras: ["Marque as caixinhas ao lado para iniciar!"]
        }
    }

    return (
        <div className="empty-body">
            <div className="empty-hero">

            </div>
            <h3 className="empty-header">
                {messages.stores.headers[0]}
            </h3>
            <p className="empty-para">{messages.stores.paras[0]}</p>
        </div>
    )
}

export default EmptyState;