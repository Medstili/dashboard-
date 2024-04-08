const age_chart = document.querySelector("#age-chart").getContext('2d');
const sex_chart = document.querySelector("#sex-chart").getContext('2d');


new Chart(sex_chart, {
  type: 'pie',
  data :{
    labels: [
      'male',
      'female'
    ],
    datasets: [{
      label: '',
      data: [310 , 206],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 5
    }]
  }

});
new Chart(age_chart, {
  type: 'pie',
  data :{
    labels: [
      '20-25',
      '26-35',
      '36-50',
      '>50'
    ],
    datasets: [{
      label: '',
      data: [61, 140, 300, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        '#52D3D8',
        '#38419D '
      ],
      hoverOffset: 5
    }]
  }

});
chartIt();
async function chartIt() {

const canvas = document.querySelector( "#turnover_chart" ).getContext('2d');
  
const data = await getData();
 
  new Chart(canvas, {
  
    type: 'bar',
    data: {
      labels: data.xYears,
      datasets: [{
        label: 'annual turnover',
        data: data.yTurnover,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value, index, ticks) {
                return value + ' $';
            }
        }
        }
      }
    }
  });
}
async function getData() {
  let xYears =[];
  let yTurnover=[];
    const response = await fetch('/js/CA.csv');
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach(element => {
        const row = element.split(',')
        let year = row[0];
        let CA = row[5];
        xYears.push(year);
        yTurnover.push(parseFloat(CA));
    })
    return{xYears,yTurnover};
}



