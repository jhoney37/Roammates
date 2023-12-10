document.addEventListener("DOMContentLoaded", function() {
    let joinButtons = document.querySelectorAll('.basic')

    joinButtons.forEach((button) => {
        if (button.textContent === "Create a Group") {
            // TODO -- Open overlay for creating a group
        }
        else if (button.textContent === "My Groups") {
            button.addEventListener("click", () =>  {
                if (button.textContent === "My Groups") {
                    button.textContent = "All Groups"
                    button.classList.remove('blue')
                    button.classList.add('orange')
                }
                else {
                    button.textContent = "My Groups"
                    button.classList.remove('orange')
                    button.classList.add('blue')
                } 
            })
        }
    })
})