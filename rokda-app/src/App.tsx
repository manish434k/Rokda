import React from 'react';
import logo from './logo.svg';
import './Style';
import Table from './Components/Table';
import WatchList from './Components/watchlist/WatchList';





const headers = ['Sq.', 'Name', 'Symbol', 'Quantity', 'Net Cost', 'Current net value', 'Avg. buy price', 'Market price', 'Unrealised PnL', 'Unrealised PnL percent' ];
const data = [
    ['1', 'ITC Ltd', 'ITC', '30', '100000', '150000', '220', '430', '50000', '50%'],
    ['1', 'ITC Ltd', 'ITC', '30', '100000', '150000', '220', '430', '50000', '50%'],
    ['1', 'ITC Ltd', 'ITC', '30', '100000', '150000', '220', '430', '50000', '50%'],
    ['1', 'ITC Ltd', 'ITC', '30', '100000', '150000', '220', '430', '50000', '50%'],
    ['1', 'ITC Ltd', 'ITC', '30', '100000', '150000', '220', '430', '50000', '50%'],
    ['1', 'ITC Ltd', 'ITC', '30', '100000', '150000', '220', '430', '50000', '50%'],
    ['1', 'ITC Ltd', 'ITC', '30', '100000', '150000', '220', '430', '50000', '50%'],
    ['1', 'ITC Ltd', 'ITC', '30', '100000', '150000', '220', '430', '50000', '50%']
  ];

  const stocksData = [
    {
      symbol: 'ITC',
      lastPrice: 100,
      change: 10,
      changePercentage: 10
    },
    {
      symbol: 'HDFC',
      lastPrice: 100,
      change: 10,
      changePercentage: 10
    }
  ];
  



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className='App-logo'> Rokda </a>
      </header>
      
      <div className='App-body'>
      <div className='App-menubar'> fjf</div>  
      <div className='App-sidebar'>
          <WatchList stocks={stocksData}></WatchList>
      </div>
        
        <div>
           
          <Table headers={headers} data={data}></Table>
        </div>
      </div>
      
    </div>
  );
}

export default App;
