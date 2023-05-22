import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentSummary from './Components/Payments/PaymentSummary';
import PaymentList from './Components/Payments/PaymentList';
import RecordDirectPayment from './Components/Payments/RecordDirectPayment';

function App() {
  return (
    <div className="App">
      <RecordDirectPayment/>
    </div>
  );
}

export default App;
