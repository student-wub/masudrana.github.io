// =========================
// Mobile Menu
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// =========================
// Close Menu On Link Click
// =========================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// =========================
// Navbar Scroll Effect
// =========================

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 15px 30px rgba(0,0,0,.08)";

    }else{

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,.05)";

    }

});

// =========================
// Scroll Reveal Animation
// =========================

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

document
.querySelectorAll(
".about-card,.stat-card"
)
.forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});

// =========================
// Active Menu Highlight
// =========================

const sections =
document.querySelectorAll("section");

const menuLinks =
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

    menuLinks.forEach(link => {

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

// =========================
// Counter Animation
// =========================

const counters =
document.querySelectorAll(".stat-card h3");

counters.forEach(counter => {

    const text =
    counter.innerText;

    const number =
    parseInt(text);

    if(!isNaN(number)){

        let start = 0;

        const updateCounter = () => {

            start++;

            counter.innerText = start;

            if(start < number){

                requestAnimationFrame(
                    updateCounter
                );

            }else{

                counter.innerText = text;

            }

        };

        updateCounter();

    }

});

// =========================
// Welcome Message
// =========================

console.log(
"Masud Rana Portfolio Loaded Successfully"
);
