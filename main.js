var navBar = document.querySelector('.nav-bar-container');
var navBarTitle = document.querySelector('.nav-bar-title');
var navBarLinks = document.querySelectorAll('.navigation-links ul a');

// checks to see if user is scrolling down; then the css style for the navbar will change.
// if the user scrolls back up to the original position; then the css returns back to its original state.
let prevScrollPos = 0;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos < currentScrollPos) {
        navBar.style.backgroundColor = "#FFF";
        navBarTitle.style.color = "black";
        navBar.style.borderBottom = "2px solid red";

        for (var i = 0; i < navBarLinks.length; i++) {
            navBarLinks[i].style.color = "black";
        }

    }

    prevScrollPos = currentScrollPos;

    if (currentScrollPos === 0) {
        navBar.style.backgroundColor = "transparent";
        navBarTitle.style.color = "#FFF";
        navBar.style.borderBottom = "none";

        for (var i = 0; i < navBarLinks.length; i++) {
            navBarLinks[i].style.color = "#FFF";
        }
    }
});