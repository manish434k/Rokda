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
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className='Table-body'>
          {data.map((row, rowIndex) => (
            <tr className='Table-row' key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </>
  );
};

export default Table;