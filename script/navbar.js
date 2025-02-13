// Change style of navbar on scroll
let navbar = $("#myNavbar");
$(document.body).on("scroll", function (scrollEvent) {
    appearOnScroll(scrollEvent.currentTarget.scrollTop);
});
function appearOnScroll(height) {
    if (height > 100) {
        navbar.addClass("w3-card w3-animate-top w3-white");
    } else {
        navbar.removeClass("w3-card w3-animate-top w3-white");
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
