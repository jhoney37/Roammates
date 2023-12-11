document.addEventListener("DOMContentLoaded", function() {
    let editButton = document.getElementById('edit-profile')
    let textAreas = document.querySelectorAll('.text textArea')
    let filledAreas = document.querySelectorAll('.text li, .text p')

    let nameArea = document.getElementById('name-area')
    let pronounsArea = document.getElementById('pronouns-area')
    let bioArea = document.getElementById('bio-area')

    editButton.addEventListener("click", function() {
        if (editButton.textContent === "Edit") {
            editButton.textContent = "Save"
            editButton.classList.remove('blue')
            editButton.classList.add('orange')

            textAreas.forEach(area => {
                area.style.display = "block";
            });

            filledAreas.forEach(area => {
                area.style.display = "none";
            });
        }
        else {
            editButton.textContent = "Edit"
            editButton.classList.remove('orange')
            editButton.classList.add('blue')

            let name = nameArea.value
            let pronouns = pronounsArea.value
            let bio = bioArea.value
            let data = {'name': name, 'pronouns': pronouns, 'bio': bio}

            fetch(`${window.location.pathname}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            textAreas.forEach(area => {
                area.style.display = "none";
            });

            filledAreas.forEach(area => {
                area.style.display = "block";
            });
        }
    })
})
