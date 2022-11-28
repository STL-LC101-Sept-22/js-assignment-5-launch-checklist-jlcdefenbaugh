// Write your JavaScript code here!

window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems");
    let list.style.visibility = "hidden";
    let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotNameInput.value;
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotNameInput.value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuelLevelInput.value;
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = cargoMassInput.value;

        // if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
        //     alert("All fields are required!");
        //     event.preventDefault();
        // };
   });
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});