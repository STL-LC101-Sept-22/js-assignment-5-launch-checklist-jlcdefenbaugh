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
    let numberInput = Number(testInput);
    if(testInput === "") {
        return "Empty";
    } else if(isNaN(numberInput)) {
        return "Not a Number";
    } else if(!(isNan(numberInput))) {
        return "Is a Number";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElemenentById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
   } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Please enter valid information!")
   } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready.`;
        if(fuelLevel < 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = `There is not enough fuel for the journey!`
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!";
            document.getElementById("launchStatus").style.backgroundcolor = "red";
            pilotStatus.innerHTML = `Pilot ${pilot} is not ready.`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is not ready.`;
        } else if(fuelLevel >)
   }
}

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
