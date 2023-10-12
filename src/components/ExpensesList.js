import "./ExpensesList.css";
import Expense from "./ExpenseItem";
export default function ExpensesList(props) {
  return (
    <ul className="expenses-list">
      {props.items.length > 0 ? (
        props.items.map((e) => {
          return (
            <Expense
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
            />
          );
        })
      ) : (
        <h2 className="expenses-list__fallback">No items to show</h2>
      )}
    </ul>
  );
}
