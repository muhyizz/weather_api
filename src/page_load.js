import "./style.css";

export const buildPage = () => {
  const container = document.getElementById("main-body");

  if (!container) {
    console.error("Element with ID 'main-body' not found."); // Error handling
    return; // Exit if container not found
  }
  gridBody();
};

const gridBody = () => {
  const container = document.getElementById("main-body");
  const gridBody = document.createElement("div");
  gridBody.setAttribute("id", "gridBody");

  const header = document.createElement("div");
  header.setAttribute("id", "header");

  const tittleHeader = document.createElement("div");
  tittleHeader.setAttribute("id", "tittle");
  tittleHeader.innerText = "Weather App";

  const locationDiv = document.createElement("form");
  locationDiv.setAttribute("id", "inputDiv");

  const locationLabel = document.createElement("label");
  locationLabel.setAttribute("id", "locationLabel");
  locationLabel.setAttribute("for", "locationInput");
  locationLabel.innerText = "Location :";

  const locationInput = document.createElement("input");
  locationInput.setAttribute("id", "locationInput");
  locationInput.placeholder = "London";

  const inputButton = document.createElement("button");
  inputButton.setAttribute("id", "submitButton");
  inputButton.innerText = "Submit";

  const locationChild = [locationLabel, locationInput, inputButton];

  locationDiv.append(...locationChild);

  const generalInformation = document.createElement("div");
  generalInformation.setAttribute("id", "generalInformation");

  const locationInformation = document.createElement("div");
  locationInformation.setAttribute("id", "locationInformationn");
  locationInformation.innerText = "LOCATION";

  const regionInformation = document.createElement("div");
  regionInformation.setAttribute("id", "regionInformation");
  regionInformation.innerText = "REGION ";

  const countryInformation = document.createElement("div");
  countryInformation.setAttribute("id", "countryInformation");
  countryInformation.innerText = "COUNTRY";

  const timeInformation = document.createElement("div");
  timeInformation.setAttribute("id", "timeInformation");
  timeInformation.innerText = "LOCAL TIME";

  const locationOutput = document.createElement("div");
  locationOutput.setAttribute("id", "locationOutput");
  locationOutput.innerText = "Submit Location ";

  const regionOutput = document.createElement("div");
  regionOutput.setAttribute("id", "regionOutput");
  regionOutput.innerText = "Submit Location ";

  const countryOutput = document.createElement("div");
  countryOutput.setAttribute("id", "countryOutput");
  countryOutput.innerText = "Submit Location ";

  const localOutput = document.createElement("div");
  localOutput.setAttribute("id", "localOutput");
  localOutput.innerText = "Submit Location ";

  const generalInformationChild = [
    locationInformation,
    regionInformation,
    countryInformation,
    timeInformation,
    locationOutput,
    regionOutput,
    countryOutput,
    localOutput,
  ];

  generalInformation.append(...generalInformationChild);

  const headerChild = [tittleHeader, locationDiv, generalInformation];
  header.append(...headerChild);

  const weatherNow = document.createElement("div");
  weatherNow.setAttribute("id", "weatherNow");

  const weatherLater = document.createElement("div");
  weatherLater.setAttribute("id", "weatherLater");

  const weatherAfter = document.createElement("div");
  weatherAfter.setAttribute("id", "weatherAfter");

  const gridChild = [header, weatherNow, weatherLater, weatherAfter];
  gridBody.append(...gridChild);

  container.appendChild(gridBody);

  weatherNowDiv();
  weatherLaterDiv();
  weatherAfterDiv();
};

const weatherNowDiv = () => {
  const parentDiv = document.getElementById("weatherNow");

  const divHeader = document.createElement("div");
  divHeader.setAttribute("id", "weatherNowHeader");
  divHeader.innerText = "At The Moment";

  const currentCondition = document.createElement("div");
  currentCondition.innerText = "Condition";
  const currentOutput = document.createElement("div");
  currentOutput.setAttribute("id", "currentOutput");
  currentOutput.innerText = "Submit Location";

  const currentTemperature = document.createElement("div");
  currentTemperature.innerText = "Temperature";
  const currentTempOutput = document.createElement("div");
  currentTempOutput.setAttribute("id", "currentTempOutput");
  currentTempOutput.innerText = "Submit Location";

  const currentFeels = document.createElement("div");
  currentFeels.innerText = "Feels Like";
  const currentFeelsOutput = document.createElement("div");
  currentFeelsOutput.setAttribute("id", "currentFeelsOutput");
  currentFeelsOutput.innerText = "Submit Location";

  const childDiv = [
    divHeader,
    currentCondition,
    currentOutput,
    currentTemperature,
    currentTempOutput,
    currentFeels,
    currentFeelsOutput,
  ];

  parentDiv.append(...childDiv);
};

const weatherLaterDiv = () => {
  const parentDiv = document.getElementById("weatherLater");
  const divHeader = document.createElement("div");
  divHeader.setAttribute("id", "weatherLaterHeader");
  divHeader.innerText = "+1 Hour";

  const currentCondition = document.createElement("div");
  currentCondition.innerText = "Condition";
  const currentOutput = document.createElement("div");
  currentOutput.setAttribute("id", "laterOutput");
  currentOutput.innerText = "Submit Location";

  const currentTemperature = document.createElement("div");
  currentTemperature.innerText = "Temperature";
  const currentTempOutput = document.createElement("div");
  currentTempOutput.setAttribute("id", "laterTempOutput");
  currentTempOutput.innerText = "Submit Location";

  const currentFeels = document.createElement("div");
  currentFeels.innerText = "Feels Like";
  const currentFeelsOutput = document.createElement("div");
  currentFeelsOutput.setAttribute("id", "laterFeelsOutput");
  currentFeelsOutput.innerText = "Submit Location";

  const childDiv = [
    divHeader,
    currentCondition,
    currentOutput,
    currentTemperature,
    currentTempOutput,
    currentFeels,
    currentFeelsOutput,
  ];

  parentDiv.append(...childDiv);
};

const weatherAfterDiv = () => {
  const parentDiv = document.getElementById("weatherAfter");
  const divHeader = document.createElement("div");
  divHeader.setAttribute("id", "weatherAfterHeader");
  divHeader.innerText = "+2 Hour";

  const afterCondition = document.createElement("div");
  afterCondition.innerText = "Condition";
  const afterOutput = document.createElement("div");
  afterOutput.setAttribute("id", "afterOutput");
  afterOutput.innerText = "Submit Location";

  const afterTemperature = document.createElement("div");
  afterTemperature.innerText = "Temperature";
  const afterTempOutput = document.createElement("div");
  afterTempOutput.setAttribute("id", "afterTempOutput");
  afterTempOutput.innerText = "Submit Location";

  const afterFeels = document.createElement("div");
  afterFeels.innerText = "Feels Like";
  const afterFeelsOutput = document.createElement("div");
  afterFeelsOutput.setAttribute("id", "afterFeelsOutput");
  afterFeelsOutput.innerText = "Submit Location";

  const childDiv = [
    divHeader,
    afterCondition,
    afterOutput,
    afterTemperature,
    afterTempOutput,
    afterFeels,
    afterFeelsOutput,
  ];

  parentDiv.append(...childDiv);
};
