let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
}

let city = prompt("Enter a city");
if (city === "Paris") {
  alert("It is currently 19°C (66°F) in Paris with a humidity of 80%");
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
  );
}

let dateElement = document.querySelector("#date");
let now = new Date();
let day = now.getDay();
let hours = now.getHours();
if (hours < 10) {
  hours = `0$hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0$hours}`;
}
if (hours < 10) {
  hours = `0$hours}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

dateElement.innerHTML = `${days[day]} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let changeCityElement = document.querySelector("#cardTitle");
  let cityInput = document.querySelector("#selected-city");
  changeCityElement.innerHTML = cityInput.value;
}

let selectCity = document.querySelector("#search-form");
selectCity.addEventListener("submit", search);

let searchInput = document.querySelector("#search-text-input");
