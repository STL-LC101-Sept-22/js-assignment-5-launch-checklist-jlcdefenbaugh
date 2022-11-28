// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
    } else if(isNaN(testInput)) {
        return "Not a Number";
    } else if(!(isNan(testInput))) {
        return "Is a Number";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElemenentById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
   } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Please enter valid information!");
   } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready.`;
    launchStatus.innerHTML = "Shuttle is ready for launch.";
    launchStatus.style.backgroundcolor = "green";
        if(fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = "There is not enough fuel for the journey!";
            launchStatus.innerHTML = "Shuttle is not ready for launch!";
            launchStatus.style.backgroundcolor = "red";
        } else if(cargoLevel > 10000 && fuelLevel >= 10000) {
            cargoStatus.innerHTML = "Too much mass for the shuttle to launch!";
            launchStatus.innerHTML = "Shuttle is not ready for launch!";
            launchStatus.style.backgroundcolor = "red";
        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "There is not enough fuel for the journey!";
            cargoStatus.innerHTML = "Too much mass for the shuttle to launch!";
            launchStatus.innerHTML = "Shuttle is not ready for launch!";
            launchStatus.style.backgroundcolor = "red";
        };
   };
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
