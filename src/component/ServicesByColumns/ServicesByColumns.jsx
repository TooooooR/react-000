import React from 'react';
import "./ServicesByColumns.css"

function ServicesByColumns(props) {
  const splitIntoColumns = (data) => {
    const columns = [[], []];
    for (let i = 0; i < data.length; i++) {
      columns[i % 2].push(data[i]);
    }
    return columns;
  };

  const columns = splitIntoColumns(props.data);

  return (
    <div className='wrapper2'>
      <p className="name_of_services">{props.name}</p>
      <div className="columns">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="column">
            {column.map((item, itemIndex) => (
              <div key={itemIndex} className="item">
                <img src={props.img} alt="icon_apps" className='icon_apps'/><p className="name_of_service">{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesByColumns;
