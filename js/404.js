/*
==========================================
 TechVerse AI
 404 Error Page
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ 404 Page Loaded");

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

    const cards = document.querySelectorAll(".error-card");

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
       Hover Animation
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
       Floating 404 Number
    ========================================== */

    const errorTitle = document.querySelector(".error-hero h1");

    if (errorTitle) {

        let scale = 1;

        setInterval(() => {

            scale = scale === 1 ? 1.03 : 1;

            errorTitle.style.transform = `scale(${scale})`;

        }, 1500);

    }

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