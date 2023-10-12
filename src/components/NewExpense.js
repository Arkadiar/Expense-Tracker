import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [current, setDisplayForm] = useState(false);

  const displayForm = () => {
    setDisplayForm((current) => (current = true));
  };

  const expenseData = (enteredData) => {
    const expenseEl = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(expenseEl);
    props.onNewExpense(expenseEl);
  };
  const hideForm = () => {
    setDisplayForm(false);
  };
  return (
    <div className="new-expense">
      {!current && <button onClick={displayForm}>Add New Expense</button>}
      {current && (
        <ExpenseForm
          hideIt={hideForm}
          onSaveExpenseData={expenseData}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
