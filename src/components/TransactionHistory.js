import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return transactions.length ? (
    <div className="transaction-history">
      <h4>Transaction History</h4>
      <hr className="underline" />
      <ul className="list">
        {transactions &&
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </div>
  ) : (
    <div className="empty">
      <h4 className="empty-transaction">No transactions history!</h4>
      <hr className="underline" />
    </div>
  );
};

export default TransactionHistory;
