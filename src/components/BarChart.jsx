//Task 3 - Implement Specific Chart Components
import React from "react";
import ChartComponent from "./ChartComponent"; // Import reusable chart component

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.months, // X-axis labels (months)
    datasets: [
      {
        label: "Monthly Sales", // Chart label for dataset
        data: data.sales, // Y-axis data points (sales)
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Bars' background color
        borderColor: "rgba(75, 192, 192, 1)", // Bars' border color
        borderWidth: 1, // Bars' border width
      },
    ],
  };

  const options = { responsive: true, plugins: { legend: { display: true } } }; // Chart options for responsiveness and legend display

  return <ChartComponent type="bar" data={chartData} options={options} />; // Render bar chart with configured data and options
};

export default BarChart; // Export BarChart component