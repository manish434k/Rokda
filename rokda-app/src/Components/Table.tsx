import React from 'react';

type TableProps = {
  headers: string[];
  data: string[][];
};

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
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
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;