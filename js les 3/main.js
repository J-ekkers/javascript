console.log("main.js is loaded");


/// ff
let btnChange = document.querySelector('.change-btn');
btnChange.addEventListener('click', function () {
    let fullName = document.querySelector('.fullname');
    fullName.textContent = 'Jordy Ekkers';

});

let slfChange = document.querySelector('.changeSelf');
slfChange.addEventListener('click', function () {
    let fullName = document.querySelector('.fullname');
    fullName.textContent = 'Jordy Ekker';
});