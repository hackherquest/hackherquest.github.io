function toggleMenu() {
    var navbar = document.getElementById("navbar");
    var hamburger = document.getElementById("hamburger");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        hamburger.innerHTML = "&times;"; // Cross symbol
    } else {
        navbar.className = "navbar";
        hamburger.innerHTML = "&#9776;"; // Hamburger symbol
    }
}