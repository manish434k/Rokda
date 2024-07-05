import React from 'react';

interface StockData {
  symbol: string;
  lastPrice: number;
  change: number;
  changePercentage: number;
}


interface WatchListProps {
  stocks: StockData[];

}


const WatchList: React.FC<WatchListProps> = ({stocks}) => {
  return (
   <div className='App-sidebar' style={{ visibility: 'visible' }}> 
    <div className='watchlist-listtitle'>{"Watchlist"}
        <div className='watchlist-add'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" d="M7 13h7V6h1v7h7v1h-7v7h-1v-7H7v-1z"></path></svg>
        </div>
    </div>
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
            <td className='watchlist-table-percentage' style={stock.changePercentage < 0 ? {color: '#f23645'} : {color: '#22ab94'}}>{stock.changePercentage}%</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default WatchList;
