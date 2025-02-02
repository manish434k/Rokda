import React from 'react';
import { useState } from 'react';
import './Style';
import Table from './Components/table/Table';
import WatchList from './Components/watchlist/WatchList';
import FileUpload from './Components/fileupload/FileUpload';




const tableHeader= "Stocks-(India)";
const headers = ['Name', 'Symbol', 'Quantity', 'Net Cost', 'Current net value', 'Avg. buy price', 'Market price', 'Unrealised PnL', 'Unrealised PnL %' ];
const data = [
    ['ITC Ltd', 'ITC', '30', '100000', '150000', '220', '430', '50000', '50'],
    ['Central Depository Services (India) Ltd', 'CDSL', '100', '200000', '550000', '220', '430', '50000', '-50'],
    ['Hindustan Unilever Ltd', 'HINDUNILVR', '30', '100000', '150000', '220', '430', '50000', '50'],
    ['Godrej Consumer Products Ltd', 'GODREJCP', '30', '100000', '150000', '220', '430', '50000', '100'],
    ['Dabur India Ltd', 'DABUR', '30', '100000', '150000', '220', '430', '50000', '30'],
    ['Cupid Ltd', 'CUPID', '30', '100000', '150000', '220', '430', '50000', '-3.00'],
    ['Colgate-Palmolive (India) Ltd', 'COLPAL', '30', '100000', '150000', '220', '430', '50000', '50'],
    ['Jyothy Labs Ltd', 'JYOTHYLAB', '30', '100000', '150000', '220', '430', '50000', '-20']
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


  const WatchListButton = () => {
    const [watchlistVisible, setWatchlistVisible] = useState(false);
  
    const onClick = () => {
      setWatchlistVisible(!watchlistVisible);
    };

    return (
      <>
      <div className='App-menubar'>
        <div className='App-menubar-item'>
          <button className='App-menubar-button' title='Watchlist' onClick={() => onClick()}>
            <img width="35px" height="35px" src={require("./icons/home.svg").default} alt="Home" />
          </button>
        </div>
        <div className='App-menubar-item'>  
          <button className='App-menubar-button' title='Watchlist' onClick={() => onClick()}>
            <img width="35px" height="35px" src={require("./icons/list-icon.svg").default} alt="Watchlist" />
          </button>
        </div>
      </div>
        
      {
      
      watchlistVisible && (
        <div className='watchlist_container'>
          <WatchList stocks={stocksData} />
        </div>
      )
        
      }
        
      </>
    );
  };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-logo'>         
          {"Rokda" }
        </div>
      </header>
      <div className='App-body'>
       
        {WatchListButton()}
     
        <div className='App-mainarea'>
          <div>
            <FileUpload/>
          </div>
          <div>
            <Table tableHeader = {tableHeader} headers={headers} data={data}></Table>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

