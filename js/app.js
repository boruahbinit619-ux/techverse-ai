/*
==========================================
 TechVerse AI v2.0
 File : app.js
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Loader
    ========================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.style.opacity = "0";

            loader.style.transition = "opacity .5s ease";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }

    });

    /* ==========================================
       Sticky Header
    ========================================== */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.background = "rgba(11,17,32,.95)";

        } else {

            header.style.background = "rgba(11,17,32,.75)";

        }

    });

    /* ==========================================
       Theme Button (Coming Soon)
    ========================================== */

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        themeBtn.textContent = "🌙";
    } else {
        document.body.classList.remove("light-theme");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "☀️";
        }

    });

}

/* ==========================================
   Mobile Menu
========================================== */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
            document.body.style.overflow = "hidden";
        } else {
            menuBtn.innerHTML = "☰";
            document.body.style.overflow = "auto";
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuBtn.innerHTML = "☰";
            document.body.style.overflow = "auto";

        });

    });

}

    /* ==========================================
       Console
    ========================================== */

    console.log("✅ TechVerse AI Loaded Successfully");

});
const searchInput = document.getElementById("heroSearch");
const searchBtn = document.getElementById("searchBtn");

function searchWebsite() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        alert("Please enter something to search.");
        return;
    }

    const pageText = document.body.innerText.toLowerCase();

    if (pageText.includes(query)) {
        alert("Found: " + query);
    } else {
        alert("No results found for: " + query);
    }
}

searchBtn.addEventListener("click", searchWebsite);

searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        searchWebsite();
    }
});
