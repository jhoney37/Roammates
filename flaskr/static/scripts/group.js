document.addEventListener("DOMContentLoaded", function() {
    let overlay = document.getElementById("overlay-container");
    let posts = document.querySelectorAll(".post")

    // Event listener for clicks on posts to show the overlay
    posts.forEach(function(post) {
        post.addEventListener("click", function() {
            post_id = post.id.slice("post-".length)
            overlay.style.opacity = 1;
            overlay.style.visibility = "visible";
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

                let commentButton = document.querySelector('.comment-button')
                let commentWindow = document.querySelector('.comment-window')
                commentWindow.style.display = "none"

                commentButton.addEventListener("click", function() {
                    if (commentWindow.style.display === "none") {
                        commentWindow.style.display = "Block"
                        commentButton.textContent = "Send"
                    }
                    else {
                        fetch(`${window.location.pathname}?post_id=${post_id}`, {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(document.querySelector(".comment-content").value)
                        })
                        .then(res => res.text())
                        
                        document.querySelector(".comment-content").value = ""
                        commentWindow.style.display = "none"
                        commentButton.textContent = "Comment"
                    }
                });
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
            }
        });
    });
});
