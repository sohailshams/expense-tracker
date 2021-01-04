import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import { GlobalContextProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <div className="container-fluid">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
