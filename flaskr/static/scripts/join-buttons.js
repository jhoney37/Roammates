document.addEventListener("DOMContentLoaded", function() {
    let joinButtons = document.querySelectorAll('.basic')

    joinButtons.forEach((button) => {
        if (button.textContent === "Join" || button.textContent === "Leave") {
            button.addEventListener("click", function(e) {
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
        }
    })
})