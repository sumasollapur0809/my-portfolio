function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const toggleBtns = document.querySelectorAll("#theme-toggle");

toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        toggleBtns.forEach(b => {
            if (document.body.classList.contains("dark-mode")) {
                b.textContent = "☀️";
            } else {
                b.textContent = "🌙";
            }
        });
    });
});
