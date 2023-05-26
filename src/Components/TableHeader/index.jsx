const TableHeader = ({ columns, flexes }) => {
  return (
    <div className="table-header">
      {columns?.map((column, index) =>{
        return <span style={{flex: `${flexes[index]}`, paddingLeft: '.2em'}} key={index} >{column}</span>
      })}
    </div>
  );
};

export default TableHeader;
