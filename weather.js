const https = require("https");

const apiKey = "835a6f12e0f04097be2160854251603"; // Your API Key
const city = "Karachi";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

https
  .get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const weatherData = JSON.parse(data);
        if (weatherData.cod === 200) {
          console.log("City:", weatherData.name);
          console.log("Temperature:", weatherData.main.temp + "°C");
          console.log("Weather:", weatherData.weather[0].description);
        } else {
          console.log("Error:", weatherData.message);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  })
  .on("error", (error) => {
    console.error("Error fetching API:", error);
  });
