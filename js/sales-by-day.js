// Any of the following formats may be used
var ctx = document.getElementById("pieChart");
var ctx = document.getElementById("pieChart").getContext("2d");
var ctx = $("#pieChart");

var ctx = document.getElementById("pieChart");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Instagram", "Facebook", "Twitter"],
        datasets: [{
            animationDuration: 0,
            data: [45, 110, 33],
            backgroundColor: [
                '#07BEB8',
                '#3DCCC7',
                '#9CEAEF'
            ],
            borderWidth: 0
        }]
    },
    options: {
          hover: {
              display: true
          },
          legend: {
              display: false
          }
    }
});