import { buildPage } from "./page_load";

buildPage();

var API_KEY;
var location;

document.addEventListener("DOMContentLoaded", () => {
  const submitDetails = document.getElementById("submitButton");
  submitDetails.addEventListener("click", (event) => {
    event.preventDefault();
    var location_input = document.getElementById("locationInput");
    location = location_input.value;
    API_KEY = "1855165193b84be8b82175711242205";
    importData(API_KEY, location);
  });
});

async function importData(API_KEY, location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no&days=3`,
      {
        mode: "cors",
      }
    );
    const calledOut = await response.json();
    console.log(calledOut);
    if (!response.ok) {
      console.log(
        `Error Fetching Data ${response.statusText} code ${response.status}`
      );
    }
    display(calledOut);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

function display(calledOut) {
  let locationText = document.getElementById("locationOutput");
  locationText.innerText = calledOut.location.name;
  let RegionText = document.getElementById("regionOutput");
  RegionText.innerText = calledOut.location.region;
  let countryText = document.getElementById("countryOutput");
  countryText.innerText = calledOut.location.country;
  let timeText = document.getElementById("localOutput");
  timeText.innerText = calledOut.location.localtime;

  let dateTimeNowString = calledOut.location.localtime;
  let timeNowString = dateTimeNowString.substr(11, 2);
  let timeNowInt = parseInt(timeNowString);

  let currentConditionText = document.getElementById("currentOutput");
  currentConditionText.innerText = calledOut.current.condition.text;
  let currentTemperatureText = document.getElementById("currentTempOutput");
  currentTemperatureText.innerText = calledOut.current.temp_c + " °C";
  let currentFeelsText = document.getElementById("currentFeelsOutput");
  currentFeelsText.innerText = calledOut.current.feelslike_c + " °C";

  let laterHeaderText = document.getElementById("weatherLaterHeader");
  laterHeaderText.innerText =
    calledOut.forecast.forecastday[0].hour[timeNowInt + 1].time;
  let laterConditionText = document.getElementById("laterOutput");
  laterConditionText.innerText =
    calledOut.forecast.forecastday[0].hour[timeNowInt + 1].condition.text;
  let laterTemperatureText = document.getElementById("laterTempOutput");
  laterTemperatureText.innerText =
    calledOut.forecast.forecastday[0].hour[timeNowInt + 1].temp_c + " °C";
  let laterFeelsText = document.getElementById("laterFeelsOutput");
  laterFeelsText.innerText =
    calledOut.forecast.forecastday[0].hour[timeNowInt + 1].feelslike_c + " °C";

  let afterHeaderText = document.getElementById("weatherAfterHeader");
  afterHeaderText.innerText =
    calledOut.forecast.forecastday[0].hour[timeNowInt + 2].time;
  let afterConditionText = document.getElementById("afterOutput");
  afterConditionText.innerText =
    calledOut.forecast.forecastday[0].hour[timeNowInt + 2].condition.text;
  let afterTemperatureText = document.getElementById("afterTempOutput");
  afterTemperatureText.innerText =
    calledOut.forecast.forecastday[0].hour[timeNowInt + 2].temp_c + " °C";
  let afterFeelsText = document.getElementById("afterFeelsOutput");
  afterFeelsText.innerText =
    calledOut.forecast.forecastday[0].hour[timeNowInt + 1].feelslike_c + " °C";
  //let locationImage = document.getElementById("weatherIcon");
  //const iconUrl = calledOut.current.condition.icon;
  //locationImage.style.backgroundImage = `url(${iconUrl})`;
}
