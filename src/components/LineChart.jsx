import React from "react";
import ChartComponent from "./ChartComponent";

// Component for rendering line chart
const LineChart = ({ chartData }) => {
  // Define data and configuration for line chart
  const data = {
    labels: chartData.months, // X-axis labels
    datasets: [
      {
        label: "Monthly Profits", // Dataset label
        data: chartData.profits, // Profits data from JSON
        borderColor: "rgba(54, 162, 235, 0.8)", // Line color
        fill: false, // Disable area fill under the line
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: { display: true }, // Show legend
      title: { display: true, text: "Monthly Profits" }, // Chart title
    },
  };

  return <ChartComponent type="line" data={data} options={options} />;
};

export default LineChart;