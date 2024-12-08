import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type,
        data,
        options,
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;