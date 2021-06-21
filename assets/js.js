var cityEl = document.querySelector("#city-form");
var cityInput = document.querySelector("#city");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidEl = document.querySelector("#humidity");

var cityCapture = function(event) {
    event.preventDefault();
    var city = cityInput.value.trim();
    console.log(city);
    getWeatherInfo(city);



}
var getWeatherInfo = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=51f1c609c69ed81bca38e1cd237b8bc4"
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
              console.log(data);
              
              tempVal = "Temp: " + (Math.floor((data.main.temp - 273.15) * 9/5 + 32) + " F")
              tempEl.textContent = tempVal
              windVal = "Wind: " + (data.wind.speed) + " MPH"
              windEl.textContent = windVal 
              humidVal = "Humidity: " + (data.main.humidity) + "%"
              humidEl.textContent = humidVal

              
              
            });
          } else {
            alert("Error: " + response.statusText);
          }
        })
        .catch(function(error) {
          alert("Unable to connect to GitHub");
    })
    
}

cityEl.addEventListener("submit", cityCapture);