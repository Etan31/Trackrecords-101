import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const IncomeExpenseBarChart = () => {
  const data = {
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
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable default legend
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
  };

  // Manually create legend after chart renders
  useEffect(() => {
    const legendContainer = document.getElementById("legend-container");
    if (legendContainer) {
      const legendHTML = data.datasets.map((dataset) => {
        return `<li>
          <span style="background-color: ${dataset.backgroundColor}; width: 12px; height: 12px; display: inline-block; margin-right: 5px;"></span>
          ${dataset.label}
        </li>`;
      }).join("");

      legendContainer.innerHTML = `<ul class="custom-chart-legend">${legendHTML}</ul>`;
    }
  }, [data]);

  return <Bar data={data} options={options} />;
};

export default IncomeExpenseBarChart;
