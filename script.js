// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to top when clicking the button
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



// Get all project cards
let projectCards = document.querySelectorAll(".project-card");

// Add hover effect
projectCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "#f0f8ff"; // Light blue effect
    });

    card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "white"; // Reset to default
    });
});
