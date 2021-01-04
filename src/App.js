import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
      </div>
    </div>
  );
}

export default App;
