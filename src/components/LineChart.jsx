//Task 3 - Implement Specific Chart Components
import React from "react";
import ChartComponent from "./ChartComponent"; // Reusable chart component for rendering various chart types

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months, // X-axis labels for chart (months)
    datasets: [
      {
        label: "Monthly Profits", // Chart label for dataset
        data: data.profits, // Y-axis data points (profits)
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        fill: false, // No fill under line
        tension: 0.1, // Smoothing effect for line
      },
    ],
  };

  const options = { responsive: true, plugins: { legend: { display: true } } }; // Chart options for responsiveness and legend display

  return <ChartComponent type="line" data={chartData} options={options} />; // Render line chart with configured data and options
};

export default LineChart; // Export LineChart component