import React from 'react';
import logo from './logo.svg';
import './Style';
import Table from './Components/Table';

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




function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
        ROKDA
        </a>
      </header>
      <div className='App-body'>
        <Table headers={headers} data={data}></Table>
      </div>
    </div>
  );
}

export default App;
