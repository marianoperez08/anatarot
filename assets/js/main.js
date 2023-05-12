// Scroll
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar")
    let btnNavbar = document.querySelector(".btn-navbar")
    let scrollPos = window.scrollY

    if (scrollPos > 1) {
        navbar.style.position = "fixed"
        navbar.style.backgroundColor = "var(--violet)"
        navbar.style.transition = "background-color 0.3s ease-in-out"
        btnNavbar.classList.remove("button-violet")
        btnNavbar.classList.add("button-white")
        btnNavbar.style.transition = "all 0.3s ease-in-out"
    }
    else {
        navbar.style.backgroundColor = "transparent"
        navbar.style.transition = "background-color 0.3s ease-in-out"
        btnNavbar.classList.remove("button-white")
        btnNavbar.classList.add("button-violet")
        btnNavbar.style.transition = "all 0.3s ease-in-out"
    }
});  