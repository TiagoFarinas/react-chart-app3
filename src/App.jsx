import React, { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("/data/financial_data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!chartData) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <h1>Financial Dashboard</h1>
      <div>
        <h2>Bar Chart: Monthly Sales</h2>
        <BarChart data={chartData} />
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

export default App;