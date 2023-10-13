// Get a reference to the element with the class "nav-box"
var navBoxElement = document.querySelector('.nav-box');
var navElement = document.querySelector('.nav-container input[type="checkbox"]:checked ~ .menu-items');
navBoxElement.addEventListener('click', function() {
    // Your code to run when the element is clicked
    alert('Nav box clicked!');
 
    // You can replace this alert with any other JavaScript code you want to execute.
});

function toggleMenu(event) {
  var menu = document.querySelector(".navicon");


  var navList = document.querySelector(".navList");
  var menuLinks = navList.querySelectorAll('a');
  var screenWidth = window.innerWidth;

  var icon = document.querySelector(".navicon");

  if (screenWidth < 850) {
    menu.addEventListener('click', function() {
        
        if (navList.style.display === "block") {
            navList.style.display = "none";
            document.documentElement.style.overflow = 'auto';
            document.documentElement.style.overflowX = 'auto';
        } else {
            navList.style.display = "block";
            icon.style.borderRadius = "5px";
            icon.style.backgroundColor = "red;"
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.overflowX = 'hidden';

        }
    });
    

        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navList.style.overflowY = "none"; 
                navList.style.display = "none";
                document.documentElement.style.overflow = 'auto';
                document.documentElement.style.overflowX = 'auto';
            });
        });
        

  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", toggleMenu);
});

  




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


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navList a");
  const navToggle = document.getElementById("nav-toggle");

  // Add click event listeners to the navigation links
  navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
          navToggle.checked = false; // Uncheck the checkbox to close the navigation
      });
  });
});
