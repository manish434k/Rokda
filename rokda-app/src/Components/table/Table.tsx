import React from 'react';

type TableProps = {
  headers: string[];
  data: string[][];
  tableHeader?: string 
};



const Table: React.FC<TableProps> = ({ headers, data, tableHeader }) => {
  return (
    <>
      <div className='TableHeader'>
        {tableHeader}
     
    
      <table className='Table'>
        <thead className='Table-header'>
          <tr className='Table-header-row'>
            <th className='Table-cell_sq' key={"Sq."}>{"Sq."}</th>
            {headers.map((header, index) => {
              if (index === 0) {
                return (
                  <th className='Table-cell_name' key={index}>{header}</th>
                );
              }
              else if (index === 1) {
                return (
                  <th className='Table-cell_symbol' key={index}>{header}</th>
                );
              }
              else{
                return (
                  <th  key={index}>{header}</th>
                );
              }
              
            })}
              
            
          </tr>
        </thead>
        <tbody className='Table-body'>
          {data.map((row, rowIndex) => (
            <tr className='Table-row' key={rowIndex}>
              <td className='Table-cell_sq' key={rowIndex}>{rowIndex}</td>
              {row.map((cell, cellIndex) => {
                if (cellIndex === 0) {
                  return (
                    <td className='Table-cell_name' key={cellIndex}>{cell}</td>
                  );
                }
                else if (cellIndex === 1) {
                  return (
                    <td className='Table-cell_symbol' key={cellIndex}>{cell}</td>
                  );
                }
                else if (cellIndex === row.length - 1) {
                  return (
                    <td key={cellIndex} style={Number(cell) < 0 ? {color: '#f23645'} : {color: '#22ab94'} }>{cell}{"%"}</td>
                  );
                }
                return (
                  <td key={cellIndex}>{cell}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </>
  );
};

export default Table;