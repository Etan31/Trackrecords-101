// IncomeExpenseBarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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
        backgroundColor: "rgb(32, 234, 131)",
        barThickness: 20, // Set bar thickness for Income
      },
      {
        label: "Expenses",
        data: [1000, 1200, 1300, 1400, 1500, 1600, 1450, 1550, 1650, 1750, 1850, 1950],
        backgroundColor: "rgb(230, 77, 89)",
        barThickness: 20  , // Set bar thickness for Expenses
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income vs Expenses (Monthly)',
      },
    },
    scales: {
      x: {
        stacked: false, // Ensure bars aren't stacked
        grid: {
          display: false,
        }
      },
      y: {
        beginAtZero: true, // Start y-axis at 0
        grid: {
          display: false,
        }
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default IncomeExpenseBarChart;
