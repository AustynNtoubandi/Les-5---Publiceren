document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded");

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Dynamic Hero Background Animation
    let hero = document.querySelector('.hero');
    let scrollEffect = () => {
        let scrollTop = window.scrollY;
        hero.style.backgroundPositionY = scrollTop * 0.5 + "px";
    };

    window.addEventListener("scroll", scrollEffect);
});