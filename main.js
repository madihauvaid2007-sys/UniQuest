/* =========================================
   UNIQUEST COLLEGE DATA
========================================= */

const colleges = [

    {
        name: "IIT Bombay",
        location: "Mumbai",
        state: "Maharashtra",
        type: "Government",
        category: "iit",
        course: "Engineering",
        rating: 4.9,
        fees: 2.3,
        campus: true,
        tag: "Top Ranked",
        image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "IIT Delhi",
        location: "Delhi",
        state: "Delhi",
        type: "Government",
        category: "iit",
        course: "Engineering",
        rating: 4.9,
        fees: 2.2,
        campus: true,
        tag: "Top Ranked",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "IIT Madras",
        location: "Chennai",
        state: "Tamil Nadu",
        type: "Government",
        category: "iit",
        course: "Engineering",
        rating: 4.8,
        fees: 2.1,
        campus: true,
        tag: "Excellent Campus",
        image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "IIT Kanpur",
        location: "Kanpur",
        state: "Uttar Pradesh",
        type: "Government",
        category: "iit",
        course: "Engineering",
        rating: 4.8,
        fees: 2.2,
        campus: true,
        tag: "Top Ranked",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "IISc Bangalore",
        location: "Bangalore",
        state: "Karnataka",
        type: "Government",
        category: "government",
        course: "Engineering",
        rating: 4.9,
        fees: 1.2,
        campus: true,
        tag: "Research",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "NIT Trichy",
        location: "Trichy",
        state: "Tamil Nadu",
        type: "Government",
        category: "nit",
        course: "Engineering",
        rating: 4.7,
        fees: 1.8,
        campus: true,
        tag: "Top NIT",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "NIT Warangal",
        location: "Warangal",
        state: "Telangana",
        type: "Government",
        category: "nit",
        course: "Engineering",
        rating: 4.6,
        fees: 1.8,
        campus: true,
        tag: "Top NIT",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "BITS Pilani",
        location: "Pilani",
        state: "Rajasthan",
        type: "Private",
        category: "private",
        course: "Engineering",
        rating: 4.7,
        fees: 5.2,
        campus: true,
        tag: "Premier Private",
        image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "VIT Vellore",
        location: "Vellore",
        state: "Tamil Nadu",
        type: "Private",
        category: "private",
        course: "Engineering",
        rating: 4.5,
        fees: 2.0,
        campus: true,
        tag: "Popular",
        image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Manipal Institute of Technology",
        location: "Manipal",
        state: "Karnataka",
        type: "Private",
        category: "private",
        course: "Engineering",
        rating: 4.5,
        fees: 4.1,
        campus: true,
        tag: "Campus Life",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Delhi Technological University",
        location: "Delhi",
        state: "Delhi",
        type: "Government",
        category: "government",
        course: "Engineering",
        rating: 4.5,
        fees: 2.0,
        campus: true,
        tag: "Great Placements",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "NSUT Delhi",
        location: "Delhi",
        state: "Delhi",
        type: "Government",
        category: "government",
        course: "Engineering",
        rating: 4.5,
        fees: 2.1,
        campus: true,
        tag: "Tech Focused",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        state: "Telangana",
        type: "Government",
        category: "government",
        course: "Computer Science",
        rating: 4.7,
        fees: 4.0,
        campus: false,
        tag: "CS Focused",
        image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Jadavpur University",
        location: "Kolkata",
        state: "West Bengal",
        type: "Government",
        category: "government",
        course: "Engineering",
        rating: 4.6,
        fees: 0.2,
        campus: true,
        tag: "Value for Money",
        image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "SRM Institute of Science and Technology",
        location: "Chennai",
        state: "Tamil Nadu",
        type: "Private",
        category: "private",
        course: "Engineering",
        rating: 4.3,
        fees: 3.5,
        campus: true,
        tag: "Popular",
        image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d7?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "Symbiosis Institute of Technology",
        location: "Pune",
        state: "Maharashtra",
        type: "Private",
        category: "private",
        course: "Engineering",
        rating: 4.2,
        fees: 3.6,
        campus: true,
        tag: "Campus Life",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=85"
    },

    {
        name: "College of Engineering Pune",
        location: "Pune",
        state: "Maharashtra",
        type: "Government",
        category: "government",
        course: "Engineering",
        rating: 4.5,
        fees: 0.9,
        campus: true,
        tag: "Historic",
        image: "https://images.unsplash.com/photo-1498243630442-8f3b0f7d1f1d?auto=format&fit=crop&w=900&q=85"
    }

];


/* =========================================
   ELEMENTS
========================================= */

const featuredGrid =
    document.getElementById("featuredGrid");

const allCollegeGrid =
    document.getElementById("allCollegeGrid");

const searchInput =
    document.getElementById("searchInput");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");

const budgetFilter =
    document.getElementById("budgetFilter");

const budgetDisplay =
    document.querySelector(".budget-display");



/* =========================================
   CREATE COLLEGE CARD
========================================= */

function createCollegeCard(college) {

    return `

        <article class="college-card">

            <div class="college-photo">

                <img
                    src="${college.image}"
                    alt="${college.name}"
                    loading="lazy"
                >

                <button
                    class="save-btn"
                    onclick="toggleSave(this)"
                >
                    ♡
                </button>

                <div class="college-badge">
                    ${college.tag}
                </div>

            </div>


            <div class="college-info">

                <div class="college-name">
                    ${college.name}
                </div>


                <div class="college-location">
                    📍 ${college.location}, ${college.state}
                </div>


                <div class="tags">

                    <span class="tag">
                        🎓 ${college.course}
                    </span>

                    <span class="tag">
                        ${college.type}
                    </span>

                    ${
                        college.campus
                        ? `<span class="tag">🌿 Campus Life</span>`
                        : ""
                    }

                </div>


                <div class="card-bottom">

                    <div class="rating">
                        <span>★</span>
                        ${college.rating}
                    </div>

                    <div class="fees">
                        From
                        <strong>
                            ₹${college.fees}L
                        </strong>
                        /yr
                    </div>

                </div>

            </div>

        </article>

    `;
}


/* =========================================
   DISPLAY FEATURED COLLEGES
========================================= */

function displayFeatured() {

    const featured =
        colleges.slice(0, 6);

    featuredGrid.innerHTML =
        featured
        .map(createCollegeCard)
        .join("");
}


displayFeatured();



/* =========================================
   GET SELECTED FILTERS
========================================= */

function getFilters() {

    const locations =
        [...document.querySelectorAll(".location-filter:checked")]
        .map(item => item.value);


    const courses =
        [...document.querySelectorAll(".course-filter:checked")]
        .map(item => item.value);


    const types =
        [...document.querySelectorAll(".type-filter:checked")]
        .map(item => item.value);


    const maxBudget =
        Number(budgetFilter.value);


    const search =
        searchInput.value
        .trim()
        .toLowerCase();


    return {
        locations,
        courses,
        types,
        maxBudget,
        search
    };
}



/* =========================================
   FILTER COLLEGES
========================================= */

function filterColleges() {

    const filters =
        getFilters();


    let results =
        colleges.filter(college => {


            const locationMatch =

                filters.locations.length === 0 ||

                filters.locations.includes(
                    college.location
                );


            const courseMatch =

                filters.courses.length === 0 ||

                filters.courses.includes(
                    college.course
                );


            const typeMatch =

                filters.types.length === 0 ||

                filters.types.includes(
                    college.type
                );


            const budgetMatch =

                college.fees <= filters.maxBudget;


            const searchMatch =

                filters.search === "" ||

                college.name
                .toLowerCase()
                .includes(filters.search)

                ||

                college.location
                .toLowerCase()
                .includes(filters.search)

                ||

                college.state
                .toLowerCase()
                .includes(filters.search)

                ||

                college.course
                .toLowerCase()
                .includes(filters.search);


            return (
                locationMatch &&
                courseMatch &&
                typeMatch &&
                budgetMatch &&
                searchMatch
            );

        });


    sortResults(results);


    displayResults(results);
}



/* =========================================
   SORT
========================================= */

function sortResults(results) {

    const sortValue =
        document.getElementById("sortSelect").value;


    if (sortValue === "rating") {

        results.sort(
            (a,b) => b.rating - a.rating
        );

    }


    if (sortValue === "fees") {

        results.sort(
            (a,b) => a.fees - b.fees
        );

    }

}



/* =========================================
   DISPLAY RESULTS
========================================= */

function displayResults(results) {

    resultCount.innerText =
        `${results.length} colleges found`;


    if (results.length === 0) {

        allCollegeGrid.innerHTML = "";

        noResults.style.display =
            "block";

        return;
    }


    noResults.style.display =
        "none";


    allCollegeGrid.innerHTML =
        results
        .map(createCollegeCard)
        .join("");
}



/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    filterColleges
);


document
    .getElementById("searchButton")
    .addEventListener(
        "click",
        () => {

            filterColleges();

            document
                .getElementById("explore")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );



/* =========================================
   FILTER EVENTS
========================================= */

document
    .querySelectorAll(
        ".location-filter, .course-filter, .type-filter"
    )
    .forEach(filter => {

        filter.addEventListener(
            "change",
            filterColleges
        );

    });



/* =========================================
   BUDGET
========================================= */

budgetFilter.addEventListener(
    "input",
    () => {

        budgetDisplay.innerText =
            `Up to ₹${budgetFilter.value} Lakh`;

        filterColleges();

    }
);



/* =========================================
   SORT EVENT
========================================= */

document
    .getElementById("sortSelect")
    .addEventListener(
        "change",
        filterColleges
    );



/* =========================================
   CATEGORY BUTTONS
========================================= */

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category")
                    .forEach(item =>
                        item.classList.remove("active")
                    );


                button.classList.add("active");


                const category =
                    button.dataset.category;


                let results;


                if (category === "all") {

                    results = colleges;

                }

                else if (category === "engineering") {

                    results =
                        colleges.filter(
                            college =>
                                college.course ===
                                "Engineering"
                        );

                }

                else if (category === "campus") {

                    results =
                        colleges.filter(
                            college =>
                                college.campus === true
                        );

                }

                else {

                    results =
                        colleges.filter(
                            college =>
                                college.category ===
                                category
                        );

                }


                allCollegeGrid.innerHTML =
                    results
                    .map(createCollegeCard)
                    .join("");


                resultCount.innerText =
                    `${results.length} colleges found`;


                document
                    .getElementById("explore")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });



/* =========================================
   CLEAR FILTERS
========================================= */

document
    .getElementById("clearFilters")
    .addEventListener(
        "click",
        () => {

            document
                .querySelectorAll(
                    ".location-filter, .course-filter, .type-filter"
                )
                .forEach(item =>
                    item.checked = false
                );


            budgetFilter.value = 6;


            budgetDisplay.innerText =
                "Up to ₹6 Lakh";


            searchInput.value = "";


            document
                .querySelectorAll(".category")
                .forEach(item =>
                    item.classList.remove("active")
                );


            document
                .querySelector(
                    '.category[data-category="all"]'
                )
                .classList.add("active");


            filterColleges();

        }
    );



/* =========================================
   SAVE COLLEGE
========================================= */

function toggleSave(button) {

    button.classList.toggle("saved");


    if (
        button.classList.contains("saved")
    ) {

        button.innerHTML = "♥";

    }

    else {

        button.innerHTML = "♡";

    }

}



/* =========================================
   SHOW ALL COLLEGES
========================================= */

function showAllColleges() {

    document
        .getElementById("explore")
        .scrollIntoView({
            behavior: "smooth"
        });


    displayResults(colleges);

}



/* =========================================
   GO TO QUIZ / FORM
========================================= */

function goToQuiz() {

    window.location.href =
        "assets/form.html";

}



/* =========================================
   INITIAL RESULTS
========================================= */

displayResults(colleges);