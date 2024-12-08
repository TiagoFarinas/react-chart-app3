import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Sales, Expenses, and Profits",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 10, // Scale bubble size
        })),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = { responsive: true, plugins: { legend: { display: true } } };

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;