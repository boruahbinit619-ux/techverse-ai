/*
==========================================
 TechVerse AI
 Roadmaps Page
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Roadmaps Page Loaded");

    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /* ==========================================
       Scroll Reveal Animation
    ========================================== */

    const cards = document.querySelectorAll(
        ".category-card, .roadmap-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all .6s ease";

        observer.observe(card);

    });

    /* ==========================================
       Card Hover Animation
    ========================================== */

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /* ==========================================
       Active Navigation
    ========================================== */

    const currentPage = window.location.pathname;

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        if (href && currentPage.includes(href)) {

            link.classList.add("active");

        }

    });

});