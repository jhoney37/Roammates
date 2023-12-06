document.addEventListener("DOMContentLoaded", function() {
    var open = document.getElementById("contact-button");
    var contact = document.getElementById("contact");

    open.addEventListener("click", ()=> {
        if (contact.classList.contains("open")) {
            contact.classList.remove("open");
        }
        else {
            contact.classList.add("open");
        }
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest("#contact-button") && !event.target.closest("#contact")) {
            contact.classList.remove("open");
        }
    });
});
