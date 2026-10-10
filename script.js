
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

function closeMenu() {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navItems.forEach((link) => link.classList.remove("active"));
        item.classList.add("active");
        closeMenu();
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});
