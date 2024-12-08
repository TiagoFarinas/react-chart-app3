import React from "react";
import ChartComponent from "./ChartComponent";

// Component for rendering scatter chart
const ScatterChart = ({ chartData }) => {
  // Define data and configuration for scatter chart
  const data = {
    datasets: [
      {
        label: "Expenses vs Profits", // Dataset label
        data: chartData.expenses.map((expense, index) => ({
          x: expense, // X-axis: Expenses
          y: chartData.profits[index], // Y-axis: Profits
        })),
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Point color
      },
    ],
  };

  const options = {
    responsive: true, // Make chart responsive
    plugins: {
      legend: { display: true }, // Show the legend
      title: { display: true, text: "Expenses vs Profits" }, // Chart title
    },
    scales: {
      x: { title: { display: true, text: "Expenses" } }, // X-axis title
      y: { title: { display: true, text: "Profits" } }, // Y-axis title
    },
  };

  return <ChartComponent type="scatter" data={data} options={options} />;
};

export default ScatterChart;