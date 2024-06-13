document.getElementById("menu-icon").addEventListener("click", function() {
    
    document.querySelector(".header").classList.toggle("menu-open");
});

// JavaScript to hide navbar when a link is clicked
document.querySelectorAll(".navbar a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".header").classList.remove("menu-open");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Access the HTML element with the class "multiple-text"
    const multipleTextElement = document.querySelector('.multiple-text');
    console.log(multipleTextElement);
    // Check if the element is found before initializing Typed.js
    if (multipleTextElement) {
        const typed = new Typed(multipleTextElement, {
            strings: ['Software Engineer', 'Problem-Solver', 'Creative'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    scrollToTopButton.addEventListener("click", function() {
        scrollToTop(1000); // Smooth scroll duration in milliseconds (1000ms = 1 second)
    });

    function scrollToTop(duration) {
        // Calculate the distance to scroll
        var scrollStep = -window.scrollY / (duration / 15),
            scrollInterval = setInterval(function() {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
            }, 15);
    }
});
