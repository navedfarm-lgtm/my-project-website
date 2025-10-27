// Always keep menu closed when page loads
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) menuToggle.checked = false;
});

// Close menu when clicking a menu link in mobile view
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle) menuToggle.checked = false;
    });
});
