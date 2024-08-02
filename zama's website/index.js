const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => { 
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


document.addEventListener("DOMContentLoaded", function() {
    const fadeInSections = document.querySelectorAll(".fade-in-section");

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});
  document.getElementById("know-more-button").addEventListener("click", function() {
    window.location.href = "random-extnct.html"; // Replace with the actual URL of your new home page
  });

