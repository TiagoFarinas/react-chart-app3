import React from "react";
import ChartComponent from "./ChartComponent";

// Component for rendering bar chart
const BarChart = ({ chartData }) => {
  // Define data and configuration for bar chart
  const data = {
    labels: chartData.months, // X-axis labels
    datasets: [
      {
        label: "Monthly Sales", // Dataset label
        data: chartData.sales, // Sales data from JSON
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
      },
    ],
  };

  const options = {
    responsive: true, // Make chart responsive
    plugins: {
      legend: { display: true }, // Show legend
      title: { display: true, text: "Monthly Sales" }, // Chart title
    },
  };

  return <ChartComponent type="bar" data={data} options={options} />;
};

export default BarChart;