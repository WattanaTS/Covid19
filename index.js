$(function() {

    var url = "https://pomber.github.io/covid19/timeseries.json";
    $.getJSON(url, function(result) {
        var no = 1;
        var totalconfirmed = 0;
        var totalcondeaths = 0;
        var totalconrecovered = 0;
        for (var country in result) {
            var selectedCountry = result[country];
            var row = `<tr>
        <th scope="row">${no}</th>
        <td><a href="country.html?country=${country}">${country}</a></td>


        </tr>`;
            $("#data").append(row);
            no++;
        
            totalconfirmed = totalconfirmed+selectedCountry[selectedCountry.length-1].confirmed;
            totalcondeaths = totalcondeaths+selectedCountry[selectedCountry.length-1].deaths;
            totalconrecovered = totalconrecovered+selectedCountry[selectedCountry.length-1].recovered;
        }
        $("#confirmed").append(totalconfirmed);
        $("#deaths").append(totalcondeaths);
        $("#recovered").append(totalconrecovered);
        $(document).ready(function() {
            initPieChart();
          });
          
          
          function initPieChart() {
            //-------------
            //- PIE CHART -
            //-------------
            var pieOptions = {
              responsive: true,
              segmentShowStroke: true,
              segmentStrokeColor: '#fff',
              segmentStrokeWidth: 1,
              animationSteps: 100,
              animationEasing: 'easeOutBounce',
              animateRotate: true,
              animateScale: true,
              maintainAspectRatio: true,
              legend: {
                display: true,
                position: 'right',
                labels: {
                  boxWidth: 15,
                  defaultFontColor: '#343a40',
                  defaultFontSize: 11,
                }
              }
            }
          
            var ctx = document.getElementById("pieChart");
            new Chart(ctx, {
              type: 'doughnut',
              data: {
                datasets: [{
                  data: [totalconfirmed, totalcondeaths, totalconrecovered],
                  backgroundColor: [
                    '#f56954',
                    '#00a65a',
                    '#f39c12',
                  ],
                }],
                labels: [
                  'Confirmed',
                  'Deaths',
                  'Recovered',
                ]
              },
              options: pieOptions
            });
          }
    });

});