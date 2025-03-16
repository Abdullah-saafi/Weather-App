// let welmsg = document.querySelector(".welmsg");
// let welmsg1 = document.querySelector(".welmsg1");
// let welmsg2 = document.querySelector(".welmsg2");
// let body = document.querySelector(".bodyContent");
// let userData = document.querySelector(".user");
// console.log(welmsg1);

// function showWel() {
//   welmsg.style.visibility = "visible";
//   welmsg1.style.display = "block";
//   setTimeout(() => {
//     welmsg1.style.display = "none";
//     welmsg2.style.display = "block";
//     setTimeout(() => {
//       welmsg.style.display = "none";
//       userData.style.display = "block";
//     }, 5000);
//   }, 4000);
// }

// showWel();

// let inputUserName = document.querySelector("#inputUserName");
// let inputUserEmail = document.querySelector("#inputUserEmail");
// let showUserName = document.querySelector(".showUserName");
// let inputUsersubmit = document.querySelector("#inputUserSubmit");
// let error = document.querySelector(".error");
// inputUsersubmit.disabled = true;

// inputUserName.addEventListener("input", function () {
//   if (this.value.length > 8) {
//     error.style.display = "none";
//     inputUsersubmit.disabled = false;
//     showUserName.textContent = "Hi, " + inputUserName.value;
//   } else {
//     error.style.display = "block";
//     inputUsersubmit.disabled = true;
//   }
// });
// function goHomePage() {
//   body.style.display = "block";
//   userData.style.display = "none";
// }

let searchCity = document.querySelector(".search input");
let cityName = document.querySelector(".city h1");
let countryName = document.querySelector(".country");

let temInDeg = document.querySelector(".temDeg h1");
let temInFrn = document.querySelector(".temfrn h1");
let time = document.querySelector(".time h1");
let cloud = document.querySelector(".cloud h1");
let clearWeatherImg = document.querySelector(".clearWeather");
let PartlycloudyImg = document.querySelector(".Partlycloudy");
let mistweather = document.querySelector(".mistweather");
let sunnyweather = document.querySelector(".sunnyweather");
let cloudyweather = document.querySelector(".cloudy");
let rannyWeather = document.querySelector(".rannyWeather");
let allWeather = document.querySelector(".allWeather");

let seaSubmitBtn = document.querySelector(".seasubmit");

sunnyweather.style.display = "none";

async function checkWeather(city) {
  let apiKey = "835a6f12e0f04097be2160854251603";
  let url = `http://api.weatherapi.com/v1/current.json?key=835a6f12e0f04097be2160854251603&q=${city}&aqi=no`;
  let weatherData = await fetch(`${url}`).then((response) => response.json());
  console.log(weatherData);

  cityName.innerHTML = `${weatherData.location.name}`;
  countryName.innerHTML = `${weatherData.location.country}`;
  temInDeg.innerHTML = `${weatherData.current.temp_c}°C`;
  temInFrn.innerHTML = `${weatherData.current.temp_f}°F`;
  time.innerHTML = `${weatherData.location.localtime}`;
  cloud.innerHTML = `${weatherData.current.condition.text}`;
  let weatherimg = weatherData.current.condition.text.toLowerCase();
  console.log(weatherimg);

  clearWeatherImg.style.display = "none";
  PartlycloudyImg.style.display = "none";
  mistweather.style.display = "none";
  sunnyweather.style.display = "none";
  cloudyweather.style.display = "none";
  cloudyweather.style.display = "none";
  rannyWeather.style.display = "none";
  allWeather.style.display = "none";

  if (weatherimg.includes("clear")) {
    clearWeatherImg.style.display = "block";
  } else if (weatherimg.includes("partly cloudy")) {
    PartlycloudyImg.style.display = "block";
  } else if (weatherimg.includes("mist")) {
    mistweather.style.display = "block";
  } else if (weatherimg.includes("sunny")) {
    sunnyweather.style.display = "block";
  } else if (weatherimg.includes("cloudy")) {
    cloudyweather.style.display = "block";
  } else if (weatherimg.includes("rainy")) {
    rannyWeather.style.display = "block";
  } else {
    allWeather.style.display = "block";
  }
}

seaSubmitBtn.addEventListener("click", () => {
  checkWeather(searchCity.value);
});
