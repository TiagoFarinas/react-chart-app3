//Task 3 - Implement Specific Chart Components
import React from "react";
import ChartComponent from "./ChartComponent"; // Reusable chart component

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Sales, Expenses, and Profits", // Chart label
        data: data.expenses.map((expense, index) => ({
          x: expense, // X-axis value is expenses
          y: data.profits[index], // Y-axis value is profits
          r: data.sales[index] / 10, // Bubble size scaled by sales
        })),
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Bubble color
      },
    ],
  };

  const options = { responsive: true, plugins: { legend: { display: true } } }; // Chart options for responsiveness and legend

  return <ChartComponent type="bubble" data={chartData} options={options} />; // Render bubble chart
};

export default BubbleChart; // Export BubbleChart component