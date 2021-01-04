import React from 'react';

const AccountSummary = () => {
  return (
    <div className="account-summary">
      <div className="income">
        <h5>Income</h5>
        <p className="income-expense green-text text-darken-4">$0.00</p>
      </div>

      <div className="expense">
        <h5>Expense</h5>
        <p className="income-expense red-text text-darken-4">$0.00</p>
      </div>
    </div>
  );
};

export default AccountSummary;
