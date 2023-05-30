import SearchInput from "../SearchInput";
import SelectOption from "../SelectOption";
import TableHeader from "../TableHeader";
import TableLine from "../TableLine";
import { useStoresContext } from "../../Contexts/Stores.jsx";
import { useProductsContext } from "../../Contexts/Products.jsx";
import DateInput from "../DateInput";
import { useState } from "react";
import { useGlobalContext } from "../../Contexts";
import Selected from "../Selected";

const Table = ({ type }) => {
  const { lojas, selecionadas, setSelecionadas, lojasFiltradas } =
    useStoresContext();

  const { selecionados, setSelecionados } = useProductsContext();

  const { form, setForm, handleInitialDateChange, handleEndDateChange } =
    useGlobalContext();

  const [markAllStores, setMarkAllStores] = useState(false);
  if (type === "lojas") {
    return (
      <>
        <div className="top-box">
          <SearchInput
            placeholder={"Digite o código da loja..."}
            name={"lojas"}
          />
          <button
            style={
              markAllStores || selecionadas.length > 0
                ? {
                    backgroundColor: "#FF0000",
                  }
                : { backgroundColor: "#1DA63D" }
            }
            onClick={() => {
              setMarkAllStores(!markAllStores);
              if (markAllStores || selecionadas.length > 0) {
                setMarkAllStores(false);
                return setSelecionadas([]);
              }
              setSelecionadas(lojas);
            }}
            className="check"
          >
            {markAllStores || selecionadas.length > 0
              ? "Desmarcar Todas"
              : "Marcar Todas"}
          </button>
        </div>
        <div className="inner-box">
          <TableHeader
            columns={["Código", "Nome", "UF", ""]}
            flexes={[1, 2, 1, 0.1]}
          />
          <div className="table-content">
            {lojasFiltradas?.map((item, index) => {
              return (
                <TableLine key={index} item={item} index={index} type={type} />
              );
            })}
          </div>
        </div>
      </>
    );
  } else if (type === "produtos") {
    const { produtosFiltrados } = useProductsContext();

    return (
      <>
        <div className="top-box" style={{ gap: ".3em", alignItems: "center" }}>
          <SelectOption
            categorias={["RX Marca", "RX Genérico", "Marca Própria", "OTC"]}
          />
          <SearchInput
            placeholder={"Pesquisar por Produtos..."}
            name={"produtos"}
          />
        </div>
        <div className="inner-box">
          <TableHeader
            columns={["Código", "Descrição", ""]}
            flexes={[0.5, 2, 1]}
          />
          <div className="table-content">
            {produtosFiltrados?.map((item, index) => {
              return (
                <TableLine key={index} item={item} index={index} type={type} />
              );
            })}
          </div>
        </div>
      </>
    );
  }

  if (type === "período") {
    return (
      <>
        <DateInput
          name={"startDate"}
          text={"Data de Início: "}
          value={form.startDate}
          handleChange={handleInitialDateChange}
        />
        <DateInput
          name={"endDate"}
          text={"Data de Término: "}
          value={form.endDate}
          handleChange={handleEndDateChange}
        />
      </>
    );
  }

  if (type === "resumo") {

    let ids = selecionadas.map((loja) => Number(loja.codigo));
    let newStartDate = form.startDate ? new Date(form.startDate).toISOString(): null
    let newEndDate = form.endDate ? new Date(form.endDate).toISOString() : null;

    let data = {
      startDate: newStartDate,
      endDate: newEndDate,
      categoria: "RX/Marca",
      lojas: ids,
      produtos: selecionados,
    }

    const formatDate = (date) => {
      let [year, month, day] = date.split("-");

      return `${day}/${month}/${year}`;
    };

    const clearInputs = () =>{
      setForm(
        {
          categoria: "",
          startDate: "",
          endDate: "",
          lojas: [],
          produtos: [],
          isFinished: false,
        });
        setSelecionadas([])
        setSelecionados([])
    }

    const fieldSlugs = {
      startDate: "Data de início",
      endDate: "Data de término",
      lojas: "Lojas",
      produtos: "Produtos",
      categoria: "Categoria"
    }

    const validateData = (data) => {
      for(let key in data){
        if(!data[key] || data[key].length <= 0)
        {
          return alert(`O campo ${fieldSlugs[key]} é obrigatório`)
        }
      }
      return true;
    }

    const sendData = () => {

      fetch(
        "https://upcode-backend-projetofinal-production-191e.up.railway.app/api/criar",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            categoria: form.categoria,
            lojas: ids,
            produtos: selecionados,
            startDate: newStartDate,
            endDate: newEndDate,
            isFinished: false,
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));  
    };

    return (
      <>
        <div className="summary-top-box">
          <p style={{ flex: ".4" }}>Categoria : {form.categoria ? form.categoria : "Não definida"}</p>
          <div className="summary-dates">
            <span style={{ flex: "2" }}>
              {" "}
              Período:{" "}
              {form.startDate && form.endDate ? `${formatDate(form.startDate)} a ${formatDate(form.endDate)}`: "Não definido" }
            </span>
          </div>
        </div>
        <div className="summary-content">
          <div className="summary-store">
            <Selected type={"lojas"} />
          </div>
          <div className="summary-products">
            <Selected type={"resumo"} />
          </div>
        </div>
        <div>
          {" "}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {" "}
            <button className="send-btn discard"
              onClick={() => {
                clearInputs();
              }}
              style={{ marginRight: "2rem" }}
            >
              Descartar
            </button>
            <button className="send-btn"
              onClick={() => {
                if(validateData(data))
                {
                  sendData();
                  setForm(
                    {
                      categoria: "",
                      startDate: "",
                      endDate: "",
                      lojas: [],
                      produtos: [],
                      isFinished: false,
                    });
                    setSelecionadas([])
                    setSelecionados([])
                  alert("Pesquisa enviada com sucesso!");
                }
              }}
              style={{ marginRight: "2rem" }}
            >
              Enviar
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Table;
