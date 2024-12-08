import React from "react";
import ChartComponent from "./ChartComponent";

// Component for rendering bubble chart
const BubbleChart = ({ chartData }) => {
  // Define data and configuration for bubble chart
  const data = {
    datasets: [
      {
        label: "Sales, Expenses, and Profits", // Dataset label
        data: chartData.expenses.map((expense, index) => ({
          x: expense, // X-axis: Expenses
          y: chartData.profits[index], // Y-axis: Profits
          r: chartData.sales[index] / 10, // Bubble size based on sales
        })),
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bubble color
      },
    ],
  };

  const options = {
    responsive: true, // Make chart responsive
    plugins: {
      legend: { display: true }, // Show legend
      title: { display: true, text: "Sales, Expenses, and Profits" }, // Chart title
    },
    scales: {
      x: { title: { display: true, text: "Expenses" } }, // X-axis title
      y: { title: { display: true, text: "Profits" } }, // Y-axis title
    },
  };

  return <ChartComponent type="bubble" data={data} options={options} />;
};

export default BubbleChart;