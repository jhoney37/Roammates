document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay-container");
    var posts = document.querySelectorAll("#post")
    var expandedPost = document.getElementById("expanded-post");

    var join = document.getElementById("join");

// Event listener for clicks outside the expanded post to hide the overlay
    overlay.addEventListener("click", function() {
        var clickX = event.clientX;
        var clickY = event.clientY;
        var cardRect = expandedPost.getBoundingClientRect();
        
        if (!(clickX >= cardRect.left && clickX <= cardRect.right && clickY >= cardRect.top && clickY <= cardRect.bottom)) {
            overlay.style.opacity = 0;
            overlay.style.visibility = "hidden";
            replyForm.style.display = "none"; // Hide the reply card if visible
        }
    });

// Event listener for clicks on posts to show the overlay
    posts.forEach(function(posts) {
        posts.addEventListener("click", function() {
            overlay.style.opacity = 1;
            overlay.style.visibility = "visible";
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
    var replyButton = document.getElementById("reply-button"); 
    replyButton.addEventListener("click", function () {
        overlay.style.opacity = 1;
        overlay.style.visibility = "visible";
        replyForm.style.display = "block"; // Assuming reply card is initially hidden
    });

// Event listener for the "Submit Reply" button inside the reply card
    var submitReplyButton = document.getElementById("reply-button"); //is there another ID for this that I'm not seeing???
    submitReplyButton.addEventListener("click", function () {
        var replyContent = document.getElementById("reply-textarea").value;
        appendReplyCard(replyContent, color); 
    });

// Function to append a new reply card to the expanded post
    function appendReplyCard(content, color) {
        var replyContainer = document.getElementById("reply-container"); 
        var replyCard = document.createElement('div');
        replyCard.innerHTML = replyCard(color);
        // Set the reply content dynamically
        replyCard.querySelector('p').innerText = content;
        replyContainer.appendChild(replyCard);
    }    
//Cancel reply button in expanded post
    var cancelReplyButton = document.getElementById("cancel-reply-button");
    cancelReplyButton.addEventListener("click", function () {
        overlay.style.opacity = 0;
        overlay.style.visibility = "hidden";
        replyForm.style.display = "none";
    });

});
