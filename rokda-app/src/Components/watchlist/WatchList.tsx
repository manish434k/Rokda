import React from 'react';

interface StockData {
  symbol: string;
  lastPrice: number;
  change: number;
  changePercentage: number;
}

const WatchList: React.FC<{stocks: StockData[]}> = ({stocks}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Last Price</th>
          <th>Change</th>
          <th>Change Percentage</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock, index) => (
          <tr key={index}>
            <td>{stock.symbol}</td>
            <td>{stock.lastPrice}</td>
            <td>{stock.change}</td>
            <td>{stock.changePercentage}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WatchList;
