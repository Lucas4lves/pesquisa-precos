const TableHeader = ({ columns, flexes }) => {
  return (
    <div className="table-header">
      {columns?.map((column, index) =>{
        return <span style={{flex: `${flexes[index]}`, paddingLeft: '.2em'}} key={index} >{column}</span>
      })}
    </div>
  );
};

//Passei os valores de flex numa lista pra ficar mais fácil de estilizar os filhos do cabeçalho de tabela

export default TableHeader;
