import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v1 as uuid } from 'uuid';

const AddTransaction = () => {
  const [description, setDescription] = useState();
  const [transactionAmount, setTransactionAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      description,
      transactionAmount: +transactionAmount,
    };

    addTransaction(newTransaction);
    setDescription('');
    setTransactionAmount('');
  };

  return (
    <div className="add-transaction">
      <h4>Add New Transaction</h4>
      <hr className="underline" />
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="heading" htmlFor="description">
            Description
          </label>
          <input
            className="transaction-detail"
            type="text"
            id="description"
            placeholder="Transaction Detail"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="heading" htmlFor="transaction-amount">
            Transaction Amount
          </label>
          <input
            type="number"
            id="transaction-amount"
            placeholder="Enter Transaction Amount"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </div>
        <button
          className="btn waves-effect waves-light submit-btn"
          type="submit"
          name="action"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
