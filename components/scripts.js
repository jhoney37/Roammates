//this document contains various fucntions used for Account Sign In. Mostly Popups code

function showSignUp() {
    document.getElementById('signUpPopup').style.display = 'block';
}

function hideSignUp() {
    document.getElementById('signUpPopup').style.display = 'none';
}

function showEmailConfirmation() {
    document.getElementById('emailConfirmationPopup').style.display = 'block';
}

function hideEmailConfirmation() {
    document.getElementById('emailConfirmationPopup').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    // Event listener for the "Sign up" button in the sign-in card
    document.getElementById("signup-button").addEventListener("click", function () {
        // Call the function to show the sign-up popup
        showSignUp();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Event listener for the "Confirm" button in the sign-up card
    document.getElementById("confirm-button").addEventListener("click", function () {
        // Call the function to show the email confirmation popup
        showEmailConfirmation();
    });
});

