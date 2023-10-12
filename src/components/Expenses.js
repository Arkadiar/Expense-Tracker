import Expense from "./ExpenseItem";
import "./Expenses.css";
function Expenses(justOneAttribute) {
  return (
    <div className="expenses">
      <Expense
        title={justOneAttribute.items[0].title}
        amount={justOneAttribute.items[0].amount}
        date={justOneAttribute.items[0].date}
      ></Expense>
      <Expense
        title={justOneAttribute.items[1].title}
        amount={justOneAttribute.items[1].amount}
        date={justOneAttribute.items[1].date}
      ></Expense>
      <Expense
        title={justOneAttribute.items[2].title}
        amount={justOneAttribute.items[2].amount}
        date={justOneAttribute.items[2].date}
      ></Expense>
      <Expense
        title={justOneAttribute.items[3].title}
        amount={justOneAttribute.items[3].amount}
        date={justOneAttribute.items[3].date}
      ></Expense>
    </div>
  );
}

export default Expenses;
