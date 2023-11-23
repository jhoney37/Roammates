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
}

function showEmailConfirmation() {
    // Get the sign-up card element directly from the body
    const signUpCard = document.querySelector('signup-card');

    // Create a new email confirmation card element
    const emailConfirmationCard = document.createElement('email-confirmation-card');

    // Replace the sign-up card with the email confirmation card within the body
    signUpCard.replaceWith(emailConfirmationCard);

    // Add a class to the body to style it differently if needed
    document.body.classList.add('email-confirmation-mode');
}



function handleEmailConfirmation() {
    // Add your logic to handle the email confirmation here
    // For example, you can retrieve the confirmation code from the input field
    // and perform the necessary actions.
    alert("Email confirmation logic will go here!");
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
    document.getElementById("email-confirmation-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Call the function to handle the email confirmation
        handleEmailConfirmation();
    });
});