import React, { useRef, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncomeExpenseBarChart = () => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null); // Store the chart instance

  useEffect(() => {
    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    const ctx = canvasRef.current.getContext("2d");
    chartInstanceRef.current = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Income",
            data: [1500, 2000, 1800, 2200, 2400, 2600, 2100, 2300, 2500, 2700, 2900, 3100],
            backgroundColor: "rgb(137, 201, 225)",
            barThickness: 5,
          },
          {
            label: "Expenses",
            data: [1000, 1200, 1300, 1400, 1500, 1600, 1450, 1550, 1650, 1750, 1850, 1950],
            backgroundColor: "rgba(230, 77, 89, 1)",
            barThickness: 5,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Income vs Expenses (Monthly)",
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
      },
    });

    // Custom legend
    const legendContainer = document.getElementById("legend-container");
    if (legendContainer) {
      const legendHTML = `
        <ul class="custom-chart-legend">
          <li><span style="background-color: rgb(137, 201, 225); width: 12px; height: 12px; display: inline-block; margin-right: 5px;"></span>Income</li>
          <li><span style="background-color: rgba(230, 77, 89, 1); width: 12px; height: 12px; display: inline-block; margin-right: 5px;"></span>Expenses</li>
        </ul>`;
      legendContainer.innerHTML = legendHTML;
    }

    // Cleanup function to destroy the chart when component unmounts
    // return () => {
    //   if (chartInstanceRef.current) {
    //     chartInstanceRef.current.destroy();
    //   }
    // };
  }, []);

  return (
    <div className="chart-container">
      <canvas id="chart" ref={canvasRef}></canvas>
    </div>
  );
};

export default IncomeExpenseBarChart;
