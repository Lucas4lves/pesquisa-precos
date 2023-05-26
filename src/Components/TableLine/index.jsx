const TableLine = ({item, index}) => {
  return (
    <div key={index} className="table-line">
          <span
            style={{ flex: `1`, paddingLeft: ".2em" }}
            
          >
            {item.codigo}
          </span>
          <span
            style={{ flex: `2`, paddingLeft: ".2em" }}
          >
            {item.nomeFilial}
          </span>
          <span
            style={{ flex: `1`, paddingLeft: ".2em" }}
          >
            {item.uf}
          </span>
      <input type="checkbox" />
    </div>
  );
};

export default TableLine;
