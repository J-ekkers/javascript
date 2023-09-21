
console.log("main.js is loaded");


/// ff
let btnChange = document.querySelector('.change-btn');
btnChange.addEventListener('click', function () {
    let fullName = document.querySelector('.fullname');
    fullName.textContent = 'Jordy Ekkers';

});


//opdr 3
let slfChange = document.querySelector('.changeSelf');
slfChange.addEventListener('click', function () {
    let userInput = prompt ("typ je naam");
     fullName = document.querySelector('.fullname');
    fullName.textContent = userInput
});

// opdr 4