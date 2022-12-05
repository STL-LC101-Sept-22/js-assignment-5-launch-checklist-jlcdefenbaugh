// const { formSubmission, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {  
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

    let listedPlanets;

// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch()
listedPlanetsResponse.then(function (result) {
    listedPlanets = result; //not defined in console - asynchronous - need to brush up on those functions, use then
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
    console.log("function working")
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanets); 
 //    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.imageUrl);
}) 

    let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotNameInput.value;
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotNameInput.value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelLevelInput.value);
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoMassInput.value);
    
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
   });
   
});