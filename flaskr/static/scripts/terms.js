// Add event listeners for checkboxes
const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', checkAllCheckboxes);
});

// Add event listener for the "Agree to Terms" button
document.getElementById('confirm-terms').addEventListener('click', function () {
    if (areAllCheckboxesChecked()) {
        {{ checked }}
    } else {
        alert('All terms must be agreed upon to continue.');
    }
});

// Function to check if all checkboxes are checked
function areAllCheckboxesChecked() {
    return Array.from(checkboxes).every(checkbox => checkbox.checked);
}

// Function to show alert if the user tries to click the button without checking all checkboxes
function checkAllCheckboxes() {
    const agreeButton = document.getElementById('confirm-terms');
    agreeButton.removeEventListener('click'); // Remove previous event listener
    agreeButton.addEventListener('click', showAlert); // Add a new event listener
}

// Function to show alert
function showAlert() {
    if (!areAllCheckboxesChecked()) {
        alert('All terms must be agreed upon to continue.');
    }
}
