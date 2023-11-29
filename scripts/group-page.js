document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay-container");
    var posts = document.querySelectorAll("#post")
    var expandedPost = document.getElementById("expanded-post");

    var join = document.getElementById("join");

    overlay.addEventListener("click", function() {
        var clickX = event.clientX;
        var clickY = event.clientY;
        var cardRect = expandedPost.getBoundingClientRect();
        
        if (!(clickX >= cardRect.left && clickX <= cardRect.right && clickY >= cardRect.top && clickY <= cardRect.bottom)) {
            overlay.style.opacity = 0;
            overlay.style.visibility = "hidden";
        }
    });

    posts.forEach(function(posts) {
        posts.addEventListener("click", function() {
            overlay.style.opacity = 1;
            overlay.style.visibility = "visible";
        });
    });

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
});
