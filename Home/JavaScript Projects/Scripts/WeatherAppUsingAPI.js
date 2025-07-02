const apiKey = "3ce93e89fb8617c8d2c6dd263ba4f8be"; // Replace with your real API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found!");
      }
      return response.json();
    })
    .then(data => {
      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById("weather").innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
