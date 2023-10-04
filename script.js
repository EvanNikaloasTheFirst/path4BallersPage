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


const subTrainBox1 = document.querySelector('.subTrainBox1');
const subTrainBox2 = document.querySelector('.subTrainBox2');
const whoAreWe = document.querySelector('whoAreWe2');

function monitorWindowSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 850) {
        subTrainBox1.style.flexDirection = 'column';
        subTrainBox1.style.margin = '0 auto';
        subTrainBox1.style.paddingLeft = '100px';
        subTrainBox1.style.textAlign = 'center';
        subTrainBox2.style.flexDirection = 'column-reverse';
        whoAreWe.style.display = 'none';

    } else {
        // Reset styles if the window width is not greater than 850
        subTrainBox1.style.flexDirection = ''; // Reset to default value
        subTrainBox1.style.margin = '';
        subTrainBox1.style.paddingLeft = '';
        subTrainBox1.style.textAlign = '';
        subTrainBox2.style.flexDirection = '';
    }
}

monitorWindowSize();

// Add an event listener to continuously check window size changes
window.addEventListener('resize', monitorWindowSize);