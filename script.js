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


// Language toggle logic
const langToggleBtn = document.getElementById("lang-toggle");
let currentLang = "EN";

langToggleBtn.addEventListener("click", () => {
    const aboutEN = document.getElementById("about-en");
    const aboutIT = document.getElementById("about-it");

    if (currentLang === "EN") {
        aboutEN.style.display = "none";
        aboutIT.style.display = "block";
        currentLang = "IT";
        langToggleBtn.innerHTML = "🇮🇹 IT : EN 🇺🇸";
    } else {
        aboutEN.style.display = "block";
        aboutIT.style.display = "none";
        currentLang = "EN";
        langToggleBtn.innerHTML = "🇺🇸 EN : IT 🇮🇹";
    }
});
