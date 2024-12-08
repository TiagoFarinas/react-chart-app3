import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Expenses vs Profits",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = { responsive: true, plugins: { legend: { display: true } } };

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;