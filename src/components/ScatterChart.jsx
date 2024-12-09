//Task 3 - Implement Specific Chart Components
import React from "react";
import ChartComponent from "./ChartComponent"; // Reusable chart component for rendering charts

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Expenses vs Profits", // Label for scatter plot
        data: data.expenses.map((expense, index) => ({
          x: expense, // X-axis value is expenses
          y: data.profits[index], // Y-axis value is profits
        })),
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Point color on scatter plot
      },
    ],
  };

  const options = { responsive: true, plugins: { legend: { display: true } } }; // Chart options for responsiveness and displaying legend

  return <ChartComponent type="scatter" data={chartData} options={options} />; // Render scatter chart with the configured data and options
};

export default ScatterChart; // Export ScatterChart component