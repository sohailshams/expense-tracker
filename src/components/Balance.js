import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const transactionAmounts = transactions.map(
    (transaction) => transaction.transactionAmount
  );
  const total = transactionAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <div className="current-balance">
        <h4>Current Balance</h4>
        <h4 className={total < 0 ? 'minus-color' : 'plus-color'}>
          ${Math.abs(total)}
        </h4>
      </div>
    </div>
  );
};

export default Balance;
