console.log("main.js werkt!");
// opdr 1
let counter = 0;
while (counter < 10) {
    console.log("counter is" ,counter);

    counter = counter + 1;
}
console.log("Einde loop");

// opdr 2
counter = 2;
while (counter < 21) {
    console.log("counter is" ,counter);

    counter = counter + 1;
}
console.log("Einde loop");

//opdr 3
counter = 10;
while (counter > -1) {
    console.log("counter is" ,counter);

    counter = counter - 1;
}
console.log("Einde loop");

//opdr 4
counter = 40;
while (counter > 3) {
    console.log("counter is" ,counter);

    counter = counter - 1;
}
console.log("Einde loop");

//opdr 5
counter = 8;
while (counter > 0) {
    console.log("ik ben een student van ROC Mondriaan" ,counter);

    counter = counter - 1;
}
console.log("Einde loop");

//opdr 6
counter = 0;
while (counter < 13) {
    console.log("ik ben loop" ,counter);

    counter = counter + 1;
}
console.log("Einde loop");

//opdr 7
counter = 0;
while (counter > -3) {
    console.log("counter is" ,counter);

    counter = counter + 1;

    if (counter >= 10) {
        break
    }
}
console.log("Einde loop");

//opdr 8
counter = 0;
while (counter < 21) {
    console.log("loop" ,counter);

    counter = counter + 1;

    if (counter >= 11) {
        break
    }
}

//opdr 9
counter = 0;
while (counter < 11) {
    console.log("dit is zin 1. dit is zin 2." ,counter);

    counter = counter + 1;

    if (counter >= 11) 
    {
        console.log("dit is zin 1" ,counter);
        break
    }
}