<!-- ===========================
     Practice Platforms
=========================== -->

<section class="practice-section">

    <div class="section-title">
        <h2>Practice Platforms</h2>
        <p>Build real-world skills with hands-on labs and Capture The Flag challenges.</p>
    </div>

    <div class="practice-grid">

        <div class="practice-card">
            <h3>🎯 TryHackMe</h3>
            <p>Beginner-friendly guided cybersecurity labs.</p>
        </div>

        <div class="practice-card">
            <h3>💻 Hack The Box</h3>
            <p>Advanced penetration testing machines and labs.</p>
        </div>

        <div class="practice-card">
            <h3>🌐 PortSwigger Academy</h3>
            <p>Master web application security and Burp Suite.</p>
        </div>

        <div class="practice-card">
            <h3>🏆 PicoCTF</h3>
            <p>Learn cybersecurity through fun Capture The Flag challenges.</p>
        </div>

        <div class="practice-card">
            <h3>🐧 OverTheWire</h3>
            <p>Practice Linux, Bash and security fundamentals.</p>
        </div>

        <div class="practice-card">
            <h3>⚡ VulnHub</h3>
            <p>Download vulnerable machines for offline practice.</p>
        </div>

    </div>

</section>

<!-- ===========================
     Cybersecurity Domains
=========================== -->

<section class="domains-section">

    <div class="section-title">
        <h2>Cybersecurity Domains</h2>
        <p>Choose your specialization and build expertise.</p>
    </div>

    <div class="domains-grid">

        <div class="domain-card">🌐 Network Security</div>
        <div class="domain-card">🕵️ Ethical Hacking</div>
        <div class="domain-card">🔍 Digital Forensics</div>
        <div class="domain-card">☁️ Cloud Security</div>
        <div class="domain-card">🦠 Malware Analysis</div>
        <div class="domain-card">⚙️ Reverse Engineering</div>
        <div class="domain-card">🛡️ SOC Analyst</div>
        <div class="domain-card">🚨 Threat Hunting</div>

    </div>

</section>
/*
==========================================
 TechVerse AI
 Cybersecurity Page
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Cybersecurity Page Loaded");

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
       Scroll Animation
    ========================================== */

    const cards = document.querySelectorAll(
        ".learning-card, .roadmap-item, .cert-card, .practice-card, .domain-card, .tool-card"
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
       Card Hover Effect
    ========================================== */

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = "all .3s ease";

        });

    });

    /* ==========================================
       Active Navigation
    ========================================== */

    const currentPage = window.location.pathname;

    document.querySelectorAll(".nav-links a").forEach(link => {

        if (currentPage.includes(link.getAttribute("href"))) {

            link.classList.add("active");

        }

    });

});