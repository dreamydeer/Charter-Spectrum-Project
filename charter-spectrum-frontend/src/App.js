import { useState, useEffect } from 'react';
import './App.css';
import CustomerPointsTable from './components/CustomerPointsTable';
import customerData from './customerData.json'

const App = () => {
  return (
    <div className="App">
      <h1>Customer Points</h1>
      <CustomerPointsTable customerData={customerData}/>
    </div>
  );
}

export default App;
