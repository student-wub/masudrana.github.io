// ======================
// Navbar Scroll Effect
// ======================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(255,255,255,0.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,0.75)";

        navbar.style.boxShadow =
            "none";
    }

});

// ======================
// Active Menu Highlight
// ======================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

// ======================
// Scroll Reveal
// ======================

const revealElements =
    document.querySelectorAll(
        ".card,.timeline-card,.skill-card,.project-card,.contact-card"
    );

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(item => {

    item.classList.add("hidden");

    revealObserver.observe(item);

});

// ======================
// Smooth Button Effect
// ======================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "translateY(0) scale(1)";

    });

});

// ======================
// Welcome Console Message
// ======================

window.addEventListener("load", () => {

    console.log(
        "Welcome to Masud Rana Portfolio"
    );

});

// ======================
// Typewriter Effect
// ======================

const subtitle =
document.querySelector(".hero h2");

const text =
"Diploma Civil Engineer & B.Sc. Civil Engineering Student";

let i = 0;

subtitle.innerHTML = "";

function typeWriter() {

    if (i < text.length) {

        subtitle.innerHTML +=
            text.charAt(i);

        i++;

        setTimeout(typeWriter, 45);

    }

}

typeWriter();
