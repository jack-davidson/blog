function toggleElement(id) {
    e = document.getElementById(id);
    if (e.style.display === "none") {
            e.style.display = "block";
    } else {
            e.style.display = "none";
    }
}

function toggleNavs() {
    toggleElement("about");
    toggleElement("contact");
}

window.onload = function() {
    function mediaQuery(x) {
        if (x.matches) { // If media query matches
            document.getElementById("contact").style.display = "block";
            document.getElementById("about").style.display = "block";
        } else {
            toggleNavs();
        }
    }

    var query = window.matchMedia("(min-width: 1200px)")
    mediaQuery(query) // Call listener function at run time
    query.addListener(mediaQuery) // Attach listener function on state changes
}
