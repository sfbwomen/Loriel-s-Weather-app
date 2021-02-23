function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

    let minutes =date.getMinutes();
      if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function displayTemperature (response){
    let cityElement= document.querySelector ("#appcity");
    let appTemp = document.querySelector("#apptemperature");
    let descriptionElement = document.querySelector("#appconditions");
    let dateElement = document.querySelector("#appdate")
   
    cityElement.innerHTML = response.data.name;
    appTemp.innerHTML = Math.round (response.data.main.temp);
     descriptionElement.innerHTML = response.data.weather[0].description;
     dateElement.innerHTML = formatDate(response.data.dt*1000);
 }
 
 function search(city){
     let apiKey= "83f6f56a2d2802039025e27f9364729e";
     let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(displayTemperature);

 }

function handleSubmit (event){
    event.preventDefault();
    let selectedCityElement = document.querySelector ("#selected-city");
    search (selectedCityElement.value);
}

search("New York");

 
 let form = document.querySelector("#search-form");
 form.addEventListener("submit", handleSubmit);