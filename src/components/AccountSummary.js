import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);

  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );

  const income = transactionAmounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    transactionAmounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -(1).toFixed(2);
  return (
    <div className="account-summary">
      <div className="income">
        <h5>Income</h5>
        <p className="income-expense green-text text-darken-4">${income}</p>
      </div>

      <div className="expense">
        <h5>Expense</h5>
        <p className="income-expense red-text text-darken-4">${expense}</p>
      </div>
    </div>
  );
};

export default AccountSummary;
