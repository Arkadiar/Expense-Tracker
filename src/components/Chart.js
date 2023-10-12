import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataMax = props.dataPoints.map((e) => e.value);
  const maxTot = Math.max(...dataMax);
  return (
    <div className="chart">
      {props.dataPoints.map((e) => (
        <ChartBar
          key={e.label}
          value={e.value}
          maxValue={maxTot}
          label={e.label}
        />
      ))}
    </div>
  );
};
export default Chart;
