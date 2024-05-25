import React from 'react';

interface StockData {
  symbol: string;
  lastPrice: number;
  change: number;
  changePercentage: number;
}



const WatchList: React.FC<{stocks: StockData[]}> = ({stocks}) => {
  return (
    <>
    <div className='watchlist-listtitle'>Watchlist</div>
    <table className='watchlist-table'>
      <thead className='watchlist-header'>
        <tr>
          <th>Symbol</th>
          <th>Last </th>
          <th>Chg</th>
          <th>Chg %</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock, index) => (
          <tr key={index}>
            <td className='watchlist-table-symbol'>{stock.symbol}</td>
            <td className='watchlist-table-price'>{stock.lastPrice}</td>
            <td className='watchlist-table-change'>{stock.change}</td>
            <td className='watchlist-table-percentage'>{stock.changePercentage}%</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default WatchList;
