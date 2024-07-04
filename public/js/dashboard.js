var ctx = document.getElementById('total_balance_chart').getContext('2d');
var ctx1 = document.getElementById('total_income_chart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 100);
gradient.addColorStop(0, 'rgba(32, 207, 238, 1)');
gradient.addColorStop(1, 'rgba(225, 225, 225, 0.9)');

const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#99ffff';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};


const data = {
   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
   datasets: [{
      label: 'askldf',
      data: [12, 15, 56, 19, 26, 53, 6, 19, 3, 5, 21, 33],
      backgroundColor: gradient,
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 0.5
   }]
};

const config = {
  type: 'line',
  data,
  options: {
      plugins: {
         customCanvasBackgroundColor: {
            color: 'rgba(225, 255, 255, 0.25)',
         }
      },
      layout: {
         // padding:'5',
      },
      elements: {
         point: {
            radius: '2'
         }
      },
      legend: {
         display: false
      },

      scales: {
         xAxes: [{
            display: false,
            ticks: {
               display: false
            }
         }],
         yAxes: [{
            display: false,
            ticks: {
               display: false
            }
         }]
      }
   }, 
   plugins: [plugin],
};



var total_balance_chart = new Chart(ctx, config);
var total_income_chart = new Chart(ctx1, config);
