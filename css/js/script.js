document.addEventListener("DOMContentLoaded", function() {

    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");

    document.addEventListener("click", function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnToggle = event.target.id === "menu-toggle" || 
                                event.target.classList.contains("menu-btn");

        // If menu is open and click is outside menu + not on menu button
        if (menuToggle.checked && !isClickInsideMenu && !isClickOnToggle) {
            menuToggle.checked = false;  // Close menu
        }
    });

});
