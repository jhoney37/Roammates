document.addEventListener("DOMContentLoaded", function() {
    let joinButtons = document.querySelectorAll('.basic')
    let forms = document.querySelectorAll('form')

    window.onload = function() {
        forms.forEach((form) => {
            form.addEventListener('submit', function(e) { 
                let button = form.children[0]
                let type = button.getAttribute('name')
                let value = button.getAttribute('value')
                data = {'type':type, 'value':value}

                e.preventDefault();

                fetch("/server/group_membership", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
            })
        })
    }

    joinButtons.forEach((button) => {
        if (button.textContent === "Join" || button.textContent === "Leave") {
            // TODO -- Change state based on whether user has joined or not

            button.addEventListener("click", () =>  {
                if (button.textContent === "Join") {
                    button.textContent = "Leave"
                    button.name = "join"
                    button.classList.remove('blue')
                    button.classList.add('orange')
                }
                else {
                    button.textContent = "Join"
                    button.name = "leave"
                    button.classList.remove('orange')
                    button.classList.add('blue')
                } 
            });
        }
        else if (button.textContent === "Create a Group") {
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
            });
        }
    })
})