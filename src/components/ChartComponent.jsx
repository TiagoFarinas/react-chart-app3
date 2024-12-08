import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

// Reusable chart component to supports chart types
const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null); // Reference for canvas element
  const chartInstance = useRef(null); // Reference for Chart.js instance

  useEffect(() => {
    // Destroy existing chart instance to avoid memory leaks
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, { type, data, options });

    // Cleanup chart instance when component unmounts
    return () => {
      chartInstance.current.destroy();
    };
  }, [type, data, options]); // Re-run effect whenever props change

  return <canvas ref={chartRef} />;
};

export default ChartComponent;