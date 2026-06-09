// ======================
// Mobile Menu
// ======================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ======================
// Close Menu After Click
// ======================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ======================
// Scroll Reveal Animation
// ======================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.15
}

);

document.querySelectorAll(
".card,.project-card"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ======================
// Navbar Shadow
// ======================

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 30){

        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.08)";

    }else{

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,.05)";

    }

});

// ======================
// Active Menu Highlight
// ======================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(
            link.getAttribute("href")
            ===
            "#" + current
        ){

            link.classList.add(
                "active-link"
            );

        }

    });

});

// ======================
// Console Message
// ======================

console.log(
"Masud Rana Portfolio Loaded Successfully"
);
