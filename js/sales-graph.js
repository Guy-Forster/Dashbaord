var ctx = document.getElementById('sales-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
        datasets: [{
          lineTension: '0',
          fill: false,
            borderColor: 'rgb(44, 160, 28)',
            borderWidth: '1',
          pointBackgroundColor: 'white',
          pointBorderWidth: '2',
            data: [25, 0, 0, 0, 0, 0, 5],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            display: false
        }
    }
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var ctx = document.getElementById('expenses-chart').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Sallary", "Rent", "Domain Names", "Server", "Additional"]
      ,
        datasets: [{
            data: [3148634,609062,121500,579754,123456],
      backgroundColor:[ '#E28413', '#3DCCC7', '#9CEAEF', '#68D8D6', '#07BEB8']
        }]
    },

    // Configuration options go here
    options: {
      legend: {
            position: 'right',
        labels: {
          boxWidth: 13
        }
        }
    }
});


var needle;

(function(){

var barWidth, chart, chartInset, degToRad, repaintGauge,
    height, margin, padRad, percToDeg, percToRad, 
    percent, radius, sectionIndx, svg, totalPercent, width;

  percent = .90;
  padRad = 0.025;
  chartInset = 10;

  // Orientation of gauge:
  totalPercent = .75;

  el = d3.select('.chart-gauge');

  margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 20
  };

  width = el[0][0].offsetWidth - margin.left - margin.right;
  height = width;
  radius = Math.min(width, height) / 2;
  barWidth = 40 * width / 300;


  /*
    Utility methods 
  */
  percToDeg = function(perc) {
    return perc * 360;
  };

  percToRad = function(perc) {
    return degToRad(percToDeg(perc));
  };

  degToRad = function(deg) {
    return deg * Math.PI / 180;
  };

  // Create SVG element
  svg = el.append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);

  // Add layer for the panel
  chart = svg.append('g').attr('transform', "translate(" + ((width + margin.left) / 2) + ", " + ((height + margin.top) / 2) + ")");
  chart.append('path').attr('class', "arc chart-filled");
  chart.append('path').attr('class', "arc chart-empty");

  arc2 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)
  arc1 = d3.svg.arc().outerRadius(radius - chartInset).innerRadius(radius - chartInset - barWidth)

  repaintGauge = function (perc) 
  {
    var next_start = totalPercent;
    arcStartRad = percToRad(next_start);
    arcEndRad = arcStartRad + percToRad(perc / 2);
    next_start += perc / 2;


    arc1.startAngle(arcStartRad).endAngle(arcEndRad);

    arcStartRad = percToRad(next_start);
    arcEndRad = arcStartRad + percToRad((1 - perc) / 2);

    arc2.startAngle(arcStartRad + padRad).endAngle(arcEndRad);


    chart.select(".chart-filled").attr('d', arc1);
    chart.select(".chart-empty").attr('d', arc2);

  }


  var Needle = (function() {

    /** 
      * Helper function that returns the `d` value
      * for moving the needle
    **/
    var recalcPointerPos = function(perc) {
      var centerX, centerY, leftX, leftY, rightX, rightY, thetaRad, topX, topY;
      thetaRad = percToRad(perc / 2);
      centerX = 0;
      centerY = 0;
      topX = centerX - this.len * Math.cos(thetaRad);
      topY = centerY - this.len * Math.sin(thetaRad);
      leftX = centerX - this.radius * Math.cos(thetaRad - Math.PI / 2);
      leftY = centerY - this.radius * Math.sin(thetaRad - Math.PI / 2);
      rightX = centerX - this.radius * Math.cos(thetaRad + Math.PI / 2);
      rightY = centerY - this.radius * Math.sin(thetaRad + Math.PI / 2);
      return "M " + leftX + " " + leftY + " L " + topX + " " + topY + " L " + rightX + " " + rightY;
    };

    function Needle(el) {
      this.el = el;
      this.len = width / 3;
      this.radius = this.len / 6;
    }

    Needle.prototype.render = function() {
      this.el.append('circle').attr('class', 'needle-center').attr('cx', 0).attr('cy', 0).attr('r', this.radius);
      return this.el.append('path').attr('class', 'needle').attr('d', recalcPointerPos.call(this, 0));
    };

    Needle.prototype.moveTo = function(perc) {
      var self,
          oldValue = this.perc || 0;

      this.perc = perc;
      self = this;

      // Reset pointer position


      this.el.transition().delay(300).ease('bounce').duration(1500).select('.needle').tween('progress', function() {
        return function(percentOfPercent) {
          var progress = percent;
          
          repaintGauge(progress);
          return d3.select(this).attr('d', recalcPointerPos.call(self, progress));
        };
      });

    };

    return Needle;

  })();

  needle = new Needle(chart);
  needle.render();

  needle.moveTo(percent);

})();

