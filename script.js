/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorRing.animate(
        {
            left: e.clientX + "px",
            top: e.clientY + "px"
        },
        {
            duration: 400,
            fill: "forwards"
        }
    );

});


/* =========================
   CURSOR HOVER
========================= */

const hoverElements = document.querySelectorAll(
    "a, button, .project, .skill-row"
);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorRing.style.width = "60px";
        cursorRing.style.height = "60px";

    });

    element.addEventListener("mouseleave", () => {

        cursorRing.style.width = "35px";
        cursorRing.style.height = "35px";

    });

});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {

    if (mobileMenu.style.display === "flex") {

        mobileMenu.style.display = "none";

    } else {

        mobileMenu.style.display = "flex";

    }

});


document.querySelectorAll(".mobile-menu a").forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.style.display = "none";

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   PARALLAX HERO
========================= */

const visual = document.querySelector(".visual-frame");

document.addEventListener("mousemove", (e) => {

    if (!visual) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 50;

    const y =
        (window.innerHeight / 2 - e.clientY) / 50;

    visual.style.transform =
        `rotateY(${-x}deg) rotateX(${y}deg)`;

});


/* =========================
   CONTACT FORM
========================= */

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const button =
        form.querySelector("button");

    button.innerHTML =
        "MESSAGE SENT ✓";

    setTimeout(() => {

        button.innerHTML =
            'SEND MESSAGE <span>↗</span>';

        form.reset();

    }, 3000);

});


/* =========================
   PROJECT TILT
========================= */

const projects =
    document.querySelectorAll(".project-visual");

projects.forEach((project) => {

    project.addEventListener("mousemove", (e) => {

        const rect =
            project.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 40;

        const rotateY =
            (centerX - x) / 40;

        project.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    project.addEventListener("mouseleave", () => {

        project.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});