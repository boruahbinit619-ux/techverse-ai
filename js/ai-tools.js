/* =====================================
   TechVerse AI - AI Tools Logic
===================================== */

const toolsGrid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("toolSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let displayedTools = 12;
let currentCategory = "all";
let currentSearch = "";

/* =====================================
   Render Tools
===================================== */

function renderTools() {

    if (!toolsGrid) return;

    toolsGrid.innerHTML = "";

    let filteredTools = aiTools.filter(tool => {

        const matchCategory =
            currentCategory === "all" ||
            tool.category === currentCategory;

        const keyword = currentSearch.toLowerCase();

        const matchSearch =
            tool.name.toLowerCase().includes(keyword) ||
            tool.description.toLowerCase().includes(keyword) ||
            tool.category.toLowerCase().includes(keyword);

        return matchCategory && matchSearch;

    });

    const visibleTools = filteredTools.slice(0, displayedTools);

    visibleTools.forEach(tool => {

        toolsGrid.innerHTML += `
        <div class="tool-card">

            <div class="tool-logo">${tool.icon}</div>

            <h3>${tool.name}</h3>

            <p>${tool.description}</p>

            <div class="tool-tags">

                <span class="category-tag">
                    ${tool.category}
                </span>

                <span class="price-tag">
                    ${tool.pricing}
                </span>

            </div>

            <div class="tool-footer">

                <span class="rating">
                    ⭐ ${tool.rating}
                </span>

                <a href="${tool.link}"
                   target="_blank"
                   class="visit-btn">
                    Visit
                </a>

            </div>

        </div>
        `;
    });
    /* =====================================
   Category Filter
===================================== */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentCategory = button.dataset.category;
        displayedTools = 12;

        renderTools();

    });

});


/* =====================================
   Live Search
===================================== */

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        currentSearch = searchInput.value;
        displayedTools = 12;

        renderTools();

    });

}
/* =====================================
   Load More Button
===================================== */

if (loadMoreBtn) {

    loadMoreBtn.addEventListener("click", () => {

        displayedTools += 12;

        renderTools();

    });

}


/* =====================================
   Show / Hide Load More Button
===================================== */

function updateLoadMoreButton() {

    if (!loadMoreBtn) return;

    let filteredTools = aiTools.filter(tool => {

        const matchCategory =
            currentCategory === "all" ||
            tool.category === currentCategory;

        const keyword = currentSearch.toLowerCase();

        const matchSearch =
            tool.name.toLowerCase().includes(keyword) ||
            tool.description.toLowerCase().includes(keyword) ||
            tool.category.toLowerCase().includes(keyword);

        return matchCategory && matchSearch;

    });

    if (displayedTools >= filteredTools.length) {

        loadMoreBtn.style.display = "none";

    } else {

        loadMoreBtn.style.display = "inline-block";

    }

}
/* =====================================
   Finish Render Function
===================================== */

    updateLoadMoreButton();

}


/* =====================================
   Initial Render
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    renderTools();

});