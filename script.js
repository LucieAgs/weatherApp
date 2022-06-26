let currentDate = new Date();
let date = currentDate.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let hours = currentDate.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
function formatDate(currentDate) {
  return today;
}
let today = document.querySelector("#today");
today.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeatherConditions(response) {
  document.querySelector("#minTemp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#maxTemp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#liveTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#feeling").innerHTML = Math.round(
    response.data.main.feels_like
  );
}

function submitForm(event) {
  event.preventDefault();
  let apiKey = "b3dc19919781143cf0031e372e7d0208";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherConditions);
}
let searchForm = document.querySelector("#citySubmit");
searchForm.addEventListener("submit", submitForm);

// function showFahrenheitTemperature(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#liveTemperature");
//   celsiusLink.classList.add("active");
//   fahrenheitLink.classList.remove("active");
//   let fahrenheitTemperature = (Math.round(
//     response.data.main.temp) * 9) / 5 + 32;
//   temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
// }
// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

// function showCelsiusTemperature(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#liveTemperature");
//   celsiusLink.classList.remove("active");
//   fahrenheitLink.classList.add("active");
//   temperatureElement.innerHTML = Math.round(celsiusTemperature);
// }
// let celsiusTemperature = Math.round(response.data.main.temp);
// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", showCelsiusTemperature);
