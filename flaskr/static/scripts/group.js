document.addEventListener("DOMContentLoaded", function() {
    let overlay = document.getElementById("overlay-container");
    let posts = document.querySelectorAll(".post")

    let join = document.getElementById("join");

    // Event listener for clicks on posts to show the overlay
    posts.forEach(function(post) {
        post.addEventListener("click", function() {
            post_id = post.id.slice("post-".length)
            overlay.style.opacity = 1
            overlay.style.visibility = "visible"
            
            overlay.innerHTML = `{{ expanded_post(post[${post_id}], comments[${post_id}]) }}`

            fetch(`${window.location.pathname}?post_id=${post_id}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.text())
            .then(html => {
                overlay.innerHTML = html
            })
        });

        // Event listener for clicks outside the expanded post to hide the overlay
        overlay.addEventListener("click", function() {
            expanded = document.getElementById(`expanded-${post_id}`)
            let clickX = event.clientX;
            let clickY = event.clientY;
            let cardRect = expanded.getBoundingClientRect();
            
            if (!(clickX >= cardRect.left && clickX <= cardRect.right && clickY >= cardRect.top && clickY <= cardRect.bottom)) {
                overlay.style.opacity = 0;
                overlay.style.visibility = "hidden";
                replyForm.style.display = "none"; // Hide the reply card if visible
            }
        });
    });

    // Event listener for the "Join/Leave" button
    join.addEventListener("click", () =>  {
        if (join.textContent === "Join") {
            join.textContent = "Leave";
            join.classList.remove('blue');
            join.classList.add('orange');
        }
        else {
            join.textContent = "Join";
            join.classList.remove('orange');
            join.classList.add('blue');
        }        
    });

    // Event listener for the "Reply" button inside the expanded post
    let replyButton = document.getElementById("reply-button"); 
    replyButton.addEventListener("click", function () {
        overlay.style.opacity = 1;
        overlay.style.visibility = "visible";
        replyForm.style.display = "block"; // Assuming reply card is initially hidden
    });

    // Event listener for the "Submit Reply" button inside the reply card
    let submitReplyButton = document.getElementById("reply-button"); //is there another ID for this that I'm not seeing???
    submitReplyButton.addEventListener("click", function () {
        let replyContent = document.getElementById("reply-textarea").value;
        appendReplyCard(replyContent, color); 
    });

    // Function to append a new reply card to the expanded post
    function appendReplyCard(content, color) {
        let replyContainer = document.getElementById("reply-container"); 
        let replyCard = document.createElement('div');
        replyCard.innerHTML = replyCard(color);
        // Set the reply content dynamically
        replyCard.querySelector('p').innerText = content;
        replyContainer.appendChild(replyCard);
    }  

    //Cancel reply button in expanded post
    let cancelReplyButton = document.getElementById("cancel-reply-button");
    cancelReplyButton.addEventListener("click", function () {
        overlay.style.opacity = 0;
        overlay.style.visibility = "hidden";
        replyForm.style.display = "none";
    });

});
