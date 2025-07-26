document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll to Top Button ---
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show/hide the button on scroll
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // Scroll to top smoothly when clicking the button
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });


    // --- Project Card Hover Effect ---
    // Get all project cards (this will work for both English and Italian cards)
    const projectCards = document.querySelectorAll(".project-card");

    // Add a hover effect to each card
    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            // Apply a subtle shadow or style change for better visibility
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        });

        card.addEventListener("mouseleave", () => {
            // Reset to default styles
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
    });


    // --- Language Toggle Logic (NEW & IMPROVED) ---
    const langToggleBtn = document.getElementById("lang-toggle");
    // Start with the default language as English
    let currentLang = "EN"; 

    // Helper function to show/hide a list of elements
    const setElementVisibility = (elements, visible) => {
        elements.forEach(el => {
            el.style.display = visible ? '' : 'none'; // Use '' to reset to default display
        });
    };

    langToggleBtn.addEventListener("click", () => {
        // Find all elements for each language using the attribute selector
        const englishElements = document.querySelectorAll('[id$="-en"]');
        const italianElements = document.querySelectorAll('[id$="-it"]');

        if (currentLang === "EN") {
            // ---- SWITCH TO ITALIAN ----
            
            // Hide all English elements
            setElementVisibility(englishElements, false);
            // Show all Italian elements
            setElementVisibility(italianElements, true);
            
            // Update the language state and button text
            currentLang = "IT";
            langToggleBtn.innerHTML = "🇮🇹 IT : EN 🇺🇸";

        } else {
            // ---- SWITCH TO ENGLISH ----
            
            // Hide all Italian elements
            setElementVisibility(italianElements, false);
            // Show all English elements
            setElementVisibility(englishElements, true);

            // Update the language state and button text
            currentLang = "EN";
            langToggleBtn.innerHTML = "🇺🇸 EN : IT 🇮🇹";
        }
    });

});
