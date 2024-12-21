import React, { useRef, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

ChartJS.register(LineElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, Filler);

const Income_Income_Graph = ({label, dataValues}) => {
  const chartRef = useRef(null); // Reference to the chart instance
  const [gradient, setGradient] = useState(null); // State to store the gradient

  const inputs = {
    min: 0,
    max: 100,
    count: 8,
    decimals: 2,
    continuity: 1,
  };

  const generateLabels = () => {
    return ['Q1', 'A2', 'A3', 'A4', 'Q5', 'A6', 'A7', 'A8'];
  };

  const generateData = () => {
    return Array.from({ length: inputs.count }, () => Math.random() * (inputs.max - inputs.min) + inputs.min);
  };

useEffect(() => {
  const chart = chartRef.current;
  if (chart) {
    const ctx = chart.canvas.getContext('2d');
    const yScale = chart.scales.y;
    const yZero = yScale.getPixelForValue(0); 

    // Create a gradient from top to bottom
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
    
    // Add color stops for the gradient
    gradient.addColorStop(0, 'rgb(137, 201, 225)'); // Top color 
    gradient.addColorStop(yZero / 2 / chart.height, 'rgba(88, 183, 218, 0.5)'); // Midpoint
    gradient.addColorStop(yZero / chart.height, 'rgba(230, 77, 89, 0.3)'); // near the zero line
    gradient.addColorStop(1, 'rgba(230, 77, 89, 1)'); // Red at the bottom 

    setGradient(gradient); // Set the gradient in the state
  }
}, [chartRef]);

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: label, // Use the label passed as a prop
        data: dataValues, // Use the dataValues passed as a prop
        borderColor: 'rgb(137, 201, 225)', // Line color,
        backgroundColor: gradient, // Use the gradient as the fill background
        fill: true, // Fill the area under the line
      },
    ],
  };

  const config = {
    responsive: true,
    maintainAspectRatio: false, // Add this line
    plugins: {
      filler: {
        propagate: false,
      },
      legend: {
        display: false, // Disable the legend (hides the label)
      },
    },
    interaction: {
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.4, // Smooth the lines
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Disable grid lines on the y-axis
        },
      },
    },
  };


  return (
    <div className="graph" >
      <div className="graph-container">
        <Line ref={chartRef} data={data} options={config}   />
      </div>
    </div>
  );
};

export default Income_Income_Graph;
