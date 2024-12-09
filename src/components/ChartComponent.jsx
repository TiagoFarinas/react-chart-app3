//Task 2 - Create the Reusable ChartComponent
import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto"; // Import Chart.js for rendering charts

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null); // Reference for chart's canvas element
  const chartInstance = useRef(null); // Store Chart.js instance

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, { type, data, options }); // Initialize Chart.js
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Clean up chart instance when unmounted
      }
    };
  }, [type, data, options]); // Reinitialize chart if type, data, or options change

  return <canvas ref={chartRef} />; // Canvas element for the chart
};

export default ChartComponent; // Export reusable chart component