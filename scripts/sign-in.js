//this document contains various functions used for Account Sign In. Mostly Popups code

function showSignIn() {
    // Get the sign-in card element
    const signInCard = document.createElement('signin-card');

    // Replace the current content with the sign-in card
    document.body.innerHTML = '';
    document.body.appendChild(signInCard);

    // Remove the class added for styling in sign-up mode
    document.body.classList.remove('sign-up-mode');
}

function showSignUp() {
    // Get the sign-in card element
    const signInCard = document.querySelector('signin-card');

    // Create a new sign-up card element
    const signUpCard = document.createElement('signup-card');

    // Replace the sign-in card with the sign-up card
    signInCard.replaceWith(signUpCard);

    // Add a class to the body to style it differently if needed
    document.body.classList.add('sign-up-mode');

    // ---
    // Edit by Meryn
    // Adding the event listener after the sign-up card has loaded will allow the event listener to attach to the button
    // ---
    // Event listener for the "Confirm" button in the email confirmation card
    document.getElementById("confirm-button").addEventListener("click", function (event) {
        showEmailConfirmation();

        event.preventDefault(); // Prevent the default form submission behavior

        // Call the function to handle the email confirmation
        handleEmailConfirmation();
    });
}


function handleEmailConfirmation() {
    // Add your logic to handle the email confirmation here
    // For example, you can retrieve the confirmation code from the input field
    // and perform the necessary actions.
    alert("Email confirmation logic will go here!");
}


// Show the email confirmation (code entering) card
function showEmailConfirmation() {
    // Get the sign-up card element directly from the body
    const signUpCard = document.querySelector('signup-card');
    // Create a new email confirmation card element
    const emailConfirmationCard = document.createElement('email-confirmation-card');
    // Replace the sign-up card with the email confirmation card within the body
    signUpCard.replaceWith(emailConfirmationCard);
    // Add a class to the body to style it differently if needed
    document.body.classList.add('email-confirmation-mode');
    // Add event listener for the "Confirm" button in the email confirmation card
    document.getElementById('email-confirmation-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        // Get the entered confirmation code from the input field
        const enteredCode = document.getElementById('cnfrm-email').value;
        // Check if the entered code is valid
        if (confirmationCodeIsValid(enteredCode)) {
            // Code is valid, show the Terms of Service card
            showTermsOfService();
        } else {
            // Code is not valid, you may want to show an error message or take appropriate action
            alert('Invalid confirmation code. Please try again.');
        }
    });
}

//just an easy email confirmation code for now
let currentConfirmationCode = 'code';
function confirmationCodeIsValid(code) {
    return code.trim().toLowerCase() === currentConfirmationCode;
}


function hideEmailConfirmation() {
    // Get the email confirmation card element directly from the body
    const emailConfirmationCard = document.querySelector('email-confirmation-card');
    // Remove the email confirmation card from the DOM
    if (emailConfirmationCard) {
        emailConfirmationCard.remove();
    }
    // remove the class added for styling -- unsure if this is required so i have it commented for now
    document.body.classList.remove('email-confirmation-mode');
}

// Show terms of service card -- unsure why there is a card on top of a card
function showTermsOfService() {
    hideEmailConfirmation(); // Hide the email confirmation popup
    document.getElementById('termsOfServicePopup').style.display = 'block';
}

// Function to hide the Terms of Service popup
function hideTermsOfService() {
    document.getElementById('termsOfServicePopup').style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function () {
    // Event listener for the "Sign up" button in the sign-in card
    document.getElementById("signup-button").addEventListener("click", function () {
        // Call the function to show the sign-up card
        showSignUp();
    });

    // Event listener for the "Sign in" button in the sign-up card
    document.getElementById("signin-button").addEventListener("click", function () {
        // Call the function to show the sign-in card
        showSignIn();
    });

    // Event listener for the "Confirm" button in the email confirmation card
    document.getElementById("confirm-button").addEventListener("click", function (event) {
        showTermsOfService();
        event.preventDefault(); // Prevent the default form submission behavior
    });
/*
    // Event listener for the "Accept and Continue" button in the terms of service card
    document.getElementById("accept-terms-button").addEventListener("click", function () {
        acceptTermsAndContinue();
    });

    // Event listener for the "Close" button in the terms of service card
    document.getElementById("close-terms-button").addEventListener("click", function () {
        hideTermsOfService();
    });*/

});