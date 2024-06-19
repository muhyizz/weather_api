// import "./style.css";
// export const buildPage = () => {
//   const container = document.getElementById("main-body");

//   const createBody = () => {
//     const header = document.createElement("header");
//     header.setAttribute("id", "topHeader");
//     header.innerHTML = "Check Your Weather";

//     container.appendChild(header);

//     const formDiv = document.createElement("div");
//     formDiv.setAttribute("id", "formDiv");

//     container.appendChild(formDiv);

//     formContent();

//     const weatherDiv = document.createElement("div");
//     weatherDiv.setAttribute("id", "weatherDiv");
//     weatherDiv.innerHTML = "weatherDiv";

//     container.appendChild(weatherDiv);

//     weatherContent();
//   };

//   const formContent = () => {
//     const formDiv = document.getElementById("formDiv");

//     const apiKeyLabel = document.createElement("label");
//     apiKeyLabel.innerText = "API Key : ";
//     apiKeyLabel.setAttribute("class", "label");
//     apiKeyLabel.setAttribute("for", "apiKeyInput");
//     const apiKeyInput = document.createElement("input");
//     apiKeyInput.placeholder = "  API KEY";
//     apiKeyInput.setAttribute("class", "input");
//     apiKeyInput.setAttribute("id", "apiKeyInput");

//     formDiv.appendChild(apiKeyLabel);
//     formDiv.appendChild(apiKeyInput);

//     const locationKeyLabel = document.createElement("label");
//     locationKeyLabel.innerText = "Location : ";
//     locationKeyLabel.setAttribute("class", "label");
//     locationKeyLabel.setAttribute("for", "apiKeyInput");
//     const locationKeyInput = document.createElement("input");
//     locationKeyInput.placeholder = "  location";
//     locationKeyInput.setAttribute("id", "locationKeyInput");
//     locationKeyInput.setAttribute("class", "input");

//     formDiv.appendChild(locationKeyLabel);
//     formDiv.appendChild(locationKeyInput);

//     const buttonDiv = document.createElement("div");
//     buttonDiv.setAttribute("id", "buttonDiv");
//     const submitButton = document.createElement("button");
//     submitButton.innerText = "Submit";
//     submitButton.setAttribute("id", "submitButton");
//     submitButton.setAttribute("type", "submit");
//     buttonDiv.appendChild(submitButton);

//     formDiv.appendChild(buttonDiv);
//   };

//   const weatherContent = () => {
//     const weatherDiv = document.getElementById("weatherDiv");

//     const weatherLocation = document.createElement("div");
//     weatherLocation.innerText = "location";
//     weatherLocation.setAttribute("id", "weatherLocation");

//     const weatherIcon = document.createElement("div");
//     weatherIcon.innerText = "TheIcon";
//     weatherIcon.setAttribute("id", "weatherIcon");

//     const weatherDetail = document.createElement("div");
//     weatherDetail.setAttribute("id", "weatherDetail");
//     weatherDetail.innerText = "TheDetail";

//     weatherDiv.appendChild(weatherLocation);
//     weatherDiv.appendChild(weatherIcon);
//     weatherDiv.appendChild(weatherDetail);

//     weatherDetailContent();
//   };

//   const weatherDetailContent = () => {
//     const weatherDetail = document.getElementById("weatherDetail");

//     const weatherYesterday = document.createElement("div");
//     weatherYesterday.setAttribute("id", "weatherYesterday");
//     weatherYesterday.textContent = "Yesterday";
//     const weatherTomorrow = document.createElement("div");
//     weatherTomorrow.setAttribute("id", "weatherTomorrow");
//     weatherTomorrow.textContent = "Tomorrow";
//     const weatherDayAfter = document.createElement("div");
//     weatherDayAfter.setAttribute("id", "weatherDayAfter");
//     weatherDayAfter.textContent = "Day After";

//     weatherDetail.appendChild(weatherYesterday);
//     weatherDetail.appendChild(weatherTomorrow);
//     weatherDetail.appendChild(weatherDayAfter);
//   };
//   createBody();
// };
