// XML HTTP Request
// 1. Create request Object
var request = new XMLHttpRequest();

// 2. Open a request Connection
request.open('GET', 'http://api.countrylayer.com/v2/all?access_key=3c31266ecb44ac1d061101fcdffed688');

// 3. Sennd a request
request.send();

// 4. Data after request send, response data is stored in this.response
request.onload = function(){
    var countryData = JSON.parse(this.responseText);
    for(let country of countryData) {
        console.log(country.name)
        console.log(country.capital)
        console.log(country.region)
    }
}