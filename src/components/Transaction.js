import React from 'react';

const Transaction = ({ transaction }) => {
  const sign = transaction.transactionAmount < 0 ? '-' : '+';
  return (
    <li className={transaction.transactionAmount < 0 ? 'minus' : 'plus'}>
      {transaction.description}
      <span>
        {sign}${Math.abs(transaction.transactionAmount)}
      </span>
      <button className="delete-btn">X</button>
    </li>
  );
};

export default Transaction;
