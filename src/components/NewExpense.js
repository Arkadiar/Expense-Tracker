import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const expenseData = (enteredData) => {
    const expenseEl = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(expenseEl);
    props.onNewExpense(expenseEl);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseData}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
