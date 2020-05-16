import React from 'react';
import Header from './components/Header.js';
import Search from './components/Search.js';
import EmployeeTable from './components/EmployeeTable.js';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Search /> 
      <EmployeeTable />
    </div>

  );
}

export default App;
