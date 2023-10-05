// Get a reference to the element with the class "nav-box"
var navBoxElement = document.querySelector('.nav-box');
var navElement = document.querySelector('.nav-container input[type="checkbox"]:checked ~ .menu-items');
navBoxElement.addEventListener('click', function() {
    // Your code to run when the element is clicked
    alert('Nav box clicked!');
 
    // You can replace this alert with any other JavaScript code you want to execute.
});

var check = document.querySelector(".nav-box"); 

check.addEventListener('click', function() {
    // Your code to run when the element is clicked
    alert('Navigation menu clicked');
 
    // You can replace this alert with any other JavaScript code you want to execute.
});

function toggleMenu() {
    var menu = document.querySelector(".line");
    var nav = document.querySelector("nav");
    var navList = document.querySelector(".navList");
    var screenWidth = window.innerWidth;
  
    if (screenWidth < 850) {
      if (navList.style.display === "none" || navList.style.display === "") {
        navList.style.display = "block";
        nav.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        navList.style.display = "none";
        nav.style.display = "block";
        document.body.style.overflow = ''; // Re-enable scrolling
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