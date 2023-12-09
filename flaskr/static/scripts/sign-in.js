

// Show terms of service card -- unsure why there is a card on top of a card
function showTermsOfService() {
    document.getElementById('terms-of-service').style.display = 'block'
    document.getElementById('sign-in').style.display = 'none'
}

// Function to hide the Terms of Service popup
function hideTermsOfService() {
    document.getElementById('termsOfServicePopup').style.display = 'none'
}


document.addEventListener("DOMContentLoaded", function () {
    // Animation loop
    var letters = document.querySelectorAll(".letter")
    for (var i=0; i<letters.length; i++) {
        letters[i].style.animation = `6s ease-in-out ${i * 0.08}s infinite none running cross-fade-blur`
    }
});