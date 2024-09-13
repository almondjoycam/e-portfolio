// Change style of navbar on scroll
window.onscroll = function () {
    appearOnScroll();
};
function appearOnScroll() {
    var navbar = document.getElementById("myNavbar");
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        navbar.className =
            "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(
            " w3-card w3-animate-top w3-white",
            ""
        );
    }
}

// Used to toggle the menu on small screens
// when clicking on the menu button
function openDropdownClick() {
    var nav = $("#myNavbar");
    if (nav.attr("class").includes("nav-open")) {
        nav.removeClass("nav-open");
        nav.attr("aria-expanded", "false");
    } else {
        nav.addClass("nav-open");
        nav.attr("aria-expanded", "true");
    }
}

var itemsWithSubmenu = $(".has-submenu");

// Allows on-click toggle for keyboard users
// If the menu is already open on click,
// removes the 'open' class.
// Otherwise, adds the 'open' class.
itemsWithSubmenu.on("click", ":not(ul.submenu~li>a)", function (e) {
    var menuToggle = $(this);
    var toggleLink = menuToggle.find(".submenu-toggle");
    var menuIcon = menuToggle.find("i.menu-icon");

    if (menuToggle.parent().attr("class").includes("submenu-open")) {
        menuToggle.parent().removeClass("submenu-open");
        toggleLink.attr("aria-expanded", "false");
        menuIcon.removeClass("submenu-open");
        menuToggle.parent().siblings().fadeIn();
    } else {
        menuToggle.parent().addClass("submenu-open");
        toggleLink.attr("aria-expanded", "true");
        menuIcon.addClass("submenu-open");
        menuToggle.parent().siblings().fadeOut();
    }

    e.preventDefault();
});
