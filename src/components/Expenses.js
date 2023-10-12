import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
function Expenses(justOneAttribute) {
  const [currentYear, setDate] = useState("2023");

  const filterChanger = (selectedYear) => {
    setDate(selectedYear);
  };

  const filteredItems = justOneAttribute.items.filter((e) => {
    return e.date.getFullYear() === Number(currentYear);
  });
  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={currentYear}
          onChangeDate={filterChanger}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </div>
    </div>
  );
}

export default Expenses;
