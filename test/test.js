// function toggleMenu() {
//     var x = document.getElementById("navbar");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
// }

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