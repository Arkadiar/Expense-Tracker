import "./ExpenseDate.css";
function ExpenseDate(justOneAttribute) {
  const month = justOneAttribute.date.toLocaleString("it-IT", {
    month: "long",
  });
  const formatted = month[0].toUpperCase() + month.slice(1);
  const day = justOneAttribute.date.toLocaleString("it-IT", {
    day: "2-digit",
  });
  const year = justOneAttribute.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{formatted}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}

export default ExpenseDate;
