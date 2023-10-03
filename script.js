// Get a reference to the element with the class "nav-box"
var navBoxElement = document.querySelector('.highlight');
var navElement = document.querySelector('nav-container input[type="checkbox"]:checked ~ .menu-items');
navBoxElement.addEventListener('click', function() {
    // Your code to run when the element is clicked
    alert('Nav box clicked!');
 
    // You can replace this alert with any other JavaScript code you want to execute.
});

function toggleMenu() {
// Toggels the Nav bar 
monitorWindowSize();
    var menu = document.querySelector(".line"); 
    var nav = document.querySelector("nav"); 
    var navList = document.querySelector(".navList"); 
    var body = document.querySelector("body"); 
    var screenWidth = window.innerWidth;
    const elementToRemove = document.querySelector('.hidden');

if (screenWidth <= 850){
    if (navList.style.display === "block") {
        navList.style.display = "none"; 
        nav.style.display = "none"; 
        document.body.style.overflow = '';

    } else {
        navList.style.display = "block"; 
        nav.style.display = "block"; 
        document.body.style.overflow = "hidden"; 
    }
}
}

