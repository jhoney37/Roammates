document.addEventListener("DOMContentLoaded", function() {
    let open = document.getElementById("contact-button");
    let contact = document.querySelector(".contact");

    open.addEventListener("click", ()=> {
        if (contact.classList.contains("open")) {
            contact.classList.remove("open");
        }
        else {
            contact.classList.add("open");
        }
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest("#contact-button") && !event.target.closest(".contact")) {
            contact.classList.remove("open");
        }
    });
});
