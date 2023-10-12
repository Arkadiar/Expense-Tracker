import Chart from "./Chart";

export default function ExpensesChart(props) {
  const chartData = [
    { label: "Gen", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Mag", value: 0 },
    { label: "Giu", value: 0 },
    { label: "Lug", value: 0 },
    { label: "Ago", value: 0 },
    { label: "Set", value: 0 },
    { label: "Ott", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dic", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartData} />;
}