import { useState, useEffect } from 'react';
import './App.css';
import CustomerPointsTable from './components/CustomerPointsTable';
import customerData from './customerData.json'

const App = () => {
  return (
    <div className="App">
      <CustomerPointsTable customerData={customerData}/>
    </div>
  );
}

export default App;
