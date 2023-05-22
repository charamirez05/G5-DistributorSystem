import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentSummary from './Components/Payments/PaymentSummary';
import PaymentList from './Components/Payments/PaymentList';
import RecordDirectPayment from './Components/Payments/RecordDirectPayment';
import DashboardScreen from './Components/Dashboard/DashboardScreen';

function App() {
  return (
    <div className="App">
      <DashboardScreen/>
    </div>
  );
}

export default App;
