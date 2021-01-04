import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="transaction-history">
      <h4>Transaction History</h4>
      <hr className="underline" />
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
