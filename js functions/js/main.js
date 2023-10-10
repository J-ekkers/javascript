console.log("main.js werkt");

 

// opdracht 1

function greet() {

    console.log("Hallo wereld");

}

 

greet();

 

//opdracht 2

function welcome() {

 document.body.textContent = "Welkom op ROC Mondriaan"

}

 

welcome();

//opdracht 3

function calculateSum(){

    console.log("Antwoord is", 3 + 4);

 

}

 

calculateSum()

 

//opdracht 4

 

function calculateDivision(){

   console.log("Antwoord is", 8 / 2);

   

    }

   

    calculateDivision()

 

//opdracht 5

 

function showArrayOfNumbers() {

    console.log("Array priemgetallen", [2, 3, 5, 7, 11]);

 

}

 

showArrayOfNumbers()

 

//opdracht 6

 

function showArrayOfBrands() {

    console.log("Array automerken", ["Mercedes", "Volkswagen", "Peugot", "Tesla", "Toyota"]);

 

}

 

showArrayOfBrands()

 

//opdracht 7

 

let computer = 7

let user = 5



//opdracht 8
function showMessage(message) {
    console.log(message);
}

showMessage("hoi hoe gaat het allemaal`")

//opdracht 9
function showNumbers(a, b) {
    console.log("a ", a);
    console.log("b ", b);
}

showNumbers(12, 24)

//opdracht 10
function showSum(a, b) {
    console.log("sum is ", a + b);
}

showSum(4, 5)

//opdr 11

function showSum(num1, num2) {

    console.log("Som: " + (num1 + num2));

}

showSum(5, 3);

 

//opdr 12

function concatenateStrings(str1, str2) {

    console.log(str1 + " " + str2);

}

concatenateStrings("Hello", "World");

 

//opdr 13

function showArray(arr) {

    arr.forEach(item => {

        console.log(item);

    });

}

 

const myArray = [1, 2, 3, 4, 5];

showArray(myArray);

 

//opdr 14

 computer = 7;

 player = 5;

 bid;

 

function determineWinner(computer, player, bid) {

    console.log("Computer: " + computer);

    console.log("Player: " + player);

    console.log("Bid: " + bid);

 

    if ((bid === "hoger" && player > computer) || (bid === "lager" && player < computer)) {

        console.log("Player heeft gewonnen!");

    } else if ((bid === "hoger" && player < computer) || (bid === "lager" && player > computer)) {

        console.log("Computer heeft gewonnen!");

    } else {

        console.log("Gelijkspel!");

    }

}

 

bid = prompt("Voer 'hoger' of 'lager' in:");

determineWinner(computer, player, bid);

 

//opdr 15

function getSum(num1, num2) {

    return num1 + num2;

}

 

const result = getSum(10, 5);

console.log("De som is: " + result);

 

//opdr 16

function getProduct(num1, num2) {

    return num1 * num2;

}

 

result = getProduct(6, 7);

console.log("Het product is: " + result);

 

//opdr 17

function getDivision(num1, num2) {

    if (num2 === 0) {

        return 0;

    } else {

        return num1 / num2;

    }

}

 

 result = getDivision(8, 2);

console.log("Deel-som: " + result);

 

//opdr18

function getConcatenatedStrings(str1, str2) {

    if (str1 === null || str2 === null) {

        return null;

    } else {

        return str1 + " " + str2;

    }

}

 

result = getConcatenatedStrings("Hello", "World");

console.log(result);

 

//opdr 19

function getSumOfArray(arr) {

    let sum = 0;

 

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

    }

 

    return sum;

}

 

numbers = [1, 3, 5, 7, 11];

result = getSumOfArray(numbers);

console.log("De som van de array is: " + result);

 