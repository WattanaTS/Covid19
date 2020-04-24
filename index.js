$(function() {

    var url = "https://pomber.github.io/covid19/timeseries.json";
    $.getJSON(url, function(result) {
        var no = 1;

        var total = 0;
        for (var country in result) {
            var selectedCountry = result[country];
            var row = `<tr>
        <th scope="row">${no}</th>
        <td><a href="country.html?country=${country}">${country}</a></td>


        </tr>`;
            $("#data").append(row);
            no++;
        
            total = total+selectedCountry[selectedCountry.length-1].confirmed;
        }
        console.log(total);
        
        

    });

});