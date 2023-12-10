function showTermsOfService() {
    document.querySelector('.terms-of-service').style.display = 'block'
    document.querySelector('.sign-in').style.display = 'none'
}

document.addEventListener("DOMContentLoaded", function () {
    // Animation loop
    var letters = document.querySelectorAll(".letter")
    for (var i=0; i<letters.length; i++) {
        letters[i].style.animation = `6s ease-in-out ${i * 0.08}s infinite none running cross-fade-blur`
    }
});