//key:9977d267ce1c96a851aa8ed72279ffbf
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://restcountries.com/v3.1/all

var restCountry = fetch("https://restcountries.com/v3.1/all");

restCountry
    .then((data) => data.json())
    .then((data1) => {
        var container = document.createElement("div");
        container.classList.add("container");

        for (let i = 0; i < data1.length; i++) {
            if (i % 3 === 0) {
                var row = document.createElement("div");
                row.classList.add("row");
            }

            var card = document.createElement("div");
            card.classList.add("col-lg-4", "d-flex", "col-sm-12");
            card.innerHTML = `
                <div class="card mb-3" style="width: 18rem;">
                    <h5 class="card-title pt-2   text-center">${data1[i].name.common}</h5>
                    <img src="${data1[i].flags.svg}" class="card-img-top" alt="Flag">
                    <div class="card-body text-center">
                        <p class="card-text ">Country Code: ${data1[i].car.signs}</p>
                         <p class="card-text ">Capital: ${data1[i].capital}</p>
                        <p class="card-text ">Region: ${data1[i].region}</p>
                        <button type="button" class="btn btn-danger " onclick="checkWeather('${data1[i].name.common}')">Check Weather</button>
                    </div>
                </div>`;

            row.appendChild(card);

            if (i % 3 === 2 || i === data1.length - 1) {
                container.appendChild(row);
            }
        }

        document.body.append(container);
    });

function checkWeather(cityName) {
    var apiKey = '9977d267ce1c96a851aa8ed72279ffbf';
    var weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(weatherApiUrl)
        .then((response) => response.json())
        .then((weatherData) => {
           
            console.log(weatherData);
            alert(`Weather in ${cityName}: ${weatherData.weather[0].description}`);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

           

            
 
