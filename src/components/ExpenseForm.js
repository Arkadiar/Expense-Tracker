// import ExpenseDate from "./ExpenseDate";
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [title, setEnteredTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");

  const inputChangeTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const inputChangeAmount = (e) => {
    setEnteredAmount(e.target.value);
  };

  const inputChangeDate = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const values = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(values);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={inputChangeTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={inputChangeAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={date}
            onChange={inputChangeDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.hideIt}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
