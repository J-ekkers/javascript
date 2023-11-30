console.log("main.js werkt");


// opdr 1/2
let word = "peter";

while (true) {
    let guess = prompt("Raad het woord:");

    if (guess === word) {
        alert("je hebt het woord geraden");
        break;
    } 
    
    else if (guess === "quit") {
        alert("je hebt besloten om het spel te verlaten.");
        break;
    }

    else {
        alert("fout probeer opnieuw!.");
    }
}

//opdr 3

let temperatures = [3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];


let warmestTemperature = Math.max(...temperatures);
console.log("De warmste temperatuur is: " + warmestTemperature);


let coldestTemperatures = Math.min(...temperatures);
console.log("De koudste temperatuur is: " + coldestTemperatures);


let temperaturesAbove10 = temperatures.filter(temperature => temperature > 10);
console.log("De temperaturen boven de 10 graden zijn: " + temperaturesAbove10);

//opdr 4  