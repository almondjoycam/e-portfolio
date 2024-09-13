// Queries the submenu(s)
var itemsWithSubmenu = $(".has-submenu");
var timeDelay;

// Delays dropdown menu for mouse users
// Adds class 'open' on mouseover,
itemsWithSubmenu.on("mouseover", function () {
    $(this).addClass("open");
    clearTimeout(timeDelay);
});

// and then removes class 'open' 1 second
// after mouseout.
itemsWithSubmenu.on("mouseout", function () {
    timeDelay = setTimeout(closeMenu, 1000, $(this));
});

function closeMenu(jqObject) {
    jqObject.removeClass("open");
}
