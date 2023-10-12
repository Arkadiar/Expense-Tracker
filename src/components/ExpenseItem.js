import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(justOneAttribute) {
  const [title, setTitle] = useState(justOneAttribute.title);
  const clickHandler = () => {
    setTitle("newTitle");
  };
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={justOneAttribute.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{justOneAttribute.amount}</div>
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;
