document.addEventListener("DOMContentLoaded", function() {
    var joinButtons = document.querySelectorAll('.basic.blue');

    joinButtons.forEach((button) => {
        if (button.textContent === "Join") {
            // TODO -- Change state based on whether user has joined or not
            
            button.addEventListener("click", () =>  {
                if (button.textContent === "Join") {
                    button.textContent = "Leave";
                    button.classList.remove('blue');
                    button.classList.add('orange');
                }
                else {
                    button.textContent = "Join";
                    button.classList.remove('orange');
                    button.classList.add('blue');
                } 
            });
        }
        else if (button.textContent === "Create a Group") {
            // TODO -- Open overlay for creating a group
        }
        else if (button.textContent === "My Groups") {
            // TODO -- Replace list of groups with ones that are actively joined
            // TODO -- Replace "My Groups" button with "All Groups"
        }
    });
});