import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";

const App = () => {
  const [chartData, setChartData] = useState(null); // State to store chart data

  useEffect(() => {
    // Fetch financial data from public directory
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Display loading message while data is being fetched
  if (!chartData) return <div>Loading...</div>;

  // Render all charts with fetched data
  return (
    <div>
      <h1>Financial Dashboard</h1>
      <BarChart chartData={chartData} />
      <LineChart chartData={chartData} />
      <ScatterChart chartData={chartData} />
      <BubbleChart chartData={chartData} />
    </div>
  );
};

export default App;
