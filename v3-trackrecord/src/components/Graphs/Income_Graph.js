import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, LineElement, Title, Tooltip, Legend,
  CategoryScale, LinearScale, PointElement, Filler
} from 'chart.js';

ChartJS.register(LineElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, Filler);

const Income_Graph = ({ label, labels, dataValues, isNavOpen  }) => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      chart.resize();
      const ctx = chart.canvas.getContext('2d');
      const yScale = chart.scales.y;
      const yZero = yScale.getPixelForValue(0);
      const grad = ctx.createLinearGradient(0, 0, 0, chart.height);
      grad.addColorStop(0, 'rgb(137, 201, 225)');
      grad.addColorStop(yZero / 2 / chart.height, 'rgba(88, 183, 218, 0.5)');
      grad.addColorStop(yZero / chart.height, 'rgba(103, 230, 77, 0.3)');
      grad.addColorStop(1, 'rgba(103, 230, 77, 1)');
      setGradient(grad);
    }
  }, [labels, dataValues, isNavOpen]);

  const data = {
    labels,
    datasets: [
      {
        label,
        data: dataValues,
        borderColor: 'rgb(137, 201, 225)',
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    devicePixelRatio: window.devicePixelRatio,
    plugins: {
      filler: { propagate: false },
      legend: { display: false },
    },
    interaction: { intersect: false },
    elements: { line: { tension: 0.4 } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { display: false } }
    }
  };

  return (
    <div className="graph">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

Income_Graph.propTypes = {
  label: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataValues: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Income_Graph;
