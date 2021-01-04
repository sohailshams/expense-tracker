import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import AccountSummary from './components/AccountSummary';

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Balance />
        <AccountSummary />
      </div>
    </div>
  );
}

export default App;
