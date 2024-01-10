// Get references to the input field and the button
const inputField = document.querySelector('.txt-input');
const button = document.querySelector('.btn-check');

// Add click event listener to the button
button.addEventListener('click', function() {
    if (inputField.value.trim() === '') {
        // If the input field is empty, add a class 'red' to show a red border
        inputField.classList.remove('green'); // Remove green class if present
        inputField.classList.add('red');
    } else {
        // If the input field is not empty, add a class 'green' to show a green border
        inputField.classList.remove('red'); // Remove red class if present
        inputField.classList.add('green');
    }
});
