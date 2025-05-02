document.getElementById("getWeather").addEventListener("click", function() {
    let city = document.getElementById("city").value;
    let apiKey = ('6768905b57d6cf9750626b51921d7fbe'); 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                let weather = data.weather[0].description;
                let temp = data.main.temp;
                let humidity = data.main.humidity;

                document.getElementById("weatherResult").innerHTML = `
                    <h2>Weather in ${city}</h2>
                    <p>Temperature: ${temp}°C</p>
                    <p>Weather: ${weather}</p>
                    <p>Humidity: ${humidity}%</p>
                `;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p>There was an error fetching the weather data.</p>`;
        });
});
