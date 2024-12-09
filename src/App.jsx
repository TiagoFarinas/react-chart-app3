//Task 4/5 - Fetch Data for Charts/ Render Charts in the App
import React, { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";

const App = () => {
  const [chartData, setChartData] = useState(null); // Holds  chart data fetched from  JSON file

  useEffect(() => {
    fetch("/data/financial_data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data)) // Save fetched data to state
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, []); // Run only once when the component loads

  if (!chartData) {
    return <p>Loading data...</p>; // Display loading message while data is being fetched
  }

  return (
    <div>
      <h1>Financial Dashboard</h1> {/* Main title of dashboard */}
      <div>
        <h2>Bar Chart: Monthly Sales</h2>
        <BarChart data={chartData} /> {/* Pass fetched data to BarChart */}
      </div>
      <div>
        <h2>Line Chart: Monthly Profits</h2>
        <LineChart data={chartData} />
      </div>
      <div>
        <h2>Scatter Chart: Expenses vs Profits</h2>
        <ScatterChart data={chartData} />
      </div>
      <div>
        <h2>Bubble Chart: Sales, Expenses, and Profits</h2>
        <BubbleChart data={chartData} />
      </div>
    </div>
  );
};

export default App; // Export main application component